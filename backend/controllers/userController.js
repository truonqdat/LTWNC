import express from "express";
import userModel from "../services/userModel.js";

const getAllUser = async (reg, res) => {
  let userList = await userModel.getAllUser();

  res.render("main", { data: { title: "User", page: "user", rows: userList } });
};

export default getAllUser;
