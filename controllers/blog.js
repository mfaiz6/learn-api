import Blog from '../models/Blog.js'

//Create a blog
export const createBlog = async (req, res) => {
    const newBlog = new Blog(req.body)
    try {
        const savedBlog = await newBlog.save()
        res.status(201).json(savedBlog)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get a blog
export const getBlog = async (req, res) => {
    try {
        const ABlog = await Blog.findById(req.params.id)
        res.status(200).json(ABlog)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update a blog
export const updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedBlog)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete a blog
export const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json(`Blog with id ${req.params.id} deleted successfully.`)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get all blogs
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json(error)
    }
}


//Get only 4 blogs for home page
export const get4Blogs = async (req, res) => {
    try {
        const fourBlogs = await Blog.find().sort({'updatedAt': -1}).limit(4)
        res.status(200).json(fourBlogs)
    } catch (error) {
        res.status(500).json(error)
    }
}