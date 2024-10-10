import express from "express"

const getHomePage = (req, res) => {
    return res.render("main", {data: {title:'Homepage', page: 'home'}})
}

export default getHomePage;
