import React from "react";
import { useState, useEffect } from "react";
import qs from "qs";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { clearObject, useDebounce } from "utils/index";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param, 2000);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(clearObject(debounceParam))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
