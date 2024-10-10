import pool from "../configs/connectDB.js";

const getAllUser = async () => {
  const [rows, feilds] = await pool.execute("SELECT * FROM `user`");
  return rows;
};


export default { getAllUser };
