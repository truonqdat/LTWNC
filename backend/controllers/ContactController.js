import express from "express"

const contactPage = (reg, res) => {
    return res.render("main", {data: {title:'Homepage', page: 'contact'}})
}

export default contactPage;