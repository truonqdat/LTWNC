import express from "express"

const aboutPage = (reg, res) => {
    return res.render("main", {data: {title:'Homepage', page: 'about'}})
}

export default aboutPage;