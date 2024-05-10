import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    message: String,
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;