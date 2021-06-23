//requests from server api

import axios from "axios";
const apiEndpoint ="http://localhost:5000/snippets/"

export const fetchSnippets = async () => await axios.get(apiEndpoint)
export const createSnippet = async (snippet) => await axios.post(apiEndpoint,snippet)
export const updateSnippet = async (id,updatedSnippet) => await axios.patch(`${apiEndpoint}${id}`,updatedSnippet)
export const fetchSingleSnippet = async (id) => await axios.get(`${apiEndpoint}${id}`)
export const deleteSnippet = async (id) => await axios.delete(`${apiEndpoint}${id}`)