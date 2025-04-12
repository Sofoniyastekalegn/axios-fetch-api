
/*Alova
Alova is a request management library that combines simple API fetching with other functionalities like state management, hooks, and caching, amongst many others.

While we use react-query and SWR to process Axios-fetched data, Alova saves you those extra installations and coding by providing these methods natively. The all-in-one alternative not only fetches responses and sends requests, but also merges requests, caches responses, and optimizes them for UI frameworks.  */
import React from "react";

import { createAlova, useRequest } from "alova";

import GlobalFetch from "alova/GlobalFetch";

// Initialize Alova

const alovaInstance = createAlova({

  statesHook: React,

  requestAdapter: GlobalFetch(),

});

// GET request with useRequest

const Profile = () => {

  const { data, loading, error } = useRequest(() => alovaInstance.Get("https://jsonplaceholder.typicode.com"));

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error fetching profile</p>;

  return <div>Username: {data.username}</div>;

};

export default Profile;