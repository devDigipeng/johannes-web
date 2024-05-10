
import connectToMongoDB from '../../libs/mongodb';
import Blog from '../../model/blog';

export default async function handler(request, response) {
    if (request.method === 'POST') {

        try {
            const { title, message } = request.body;

            await connectToMongoDB(process.env.MONGODB_URI);

            const newBlogPost = await Blog.create({ title, message });

            if (newBlogPost) {

                return response.status(201).json({ message: "Blog Created", data: newBlogPost });

            } else {
                
                return response.status(400).json({ error: "Failed to create blog post. Data might be missing or invalid." });
            }
        } catch (error) {

            return response.status(500).json({ error: "Failed to create blog post. Please check server logs for details." });
        }

    } else if (request.method === 'GET') 

    try {
        await connectToMongoDB(process.env.MONGODB_URI);
        const { id } = request.query;

        if (id) {
            // If an ID is provided, fetch the single post
            const post = await Blog.findById(id);

            if (!post) {
                return response.status(404).json({ error: "Blog post not found." });
            }

            return response.status(200).json({ data: post });
            
        } else {
            const allPosts = await Blog.find({});
  
        return response.status(200).json({ data: allPosts });
        }
    
    } catch (error) {

        return response.status(500).json({ error: "Failed to fetch blog posts. Please check server logs for details." });

    } else if (request.method === 'DELETE') {

      try {

        const { id } = request.query;

        if (!id) {
            return response.status(400).json({ error: "ID parameter is required." });
        }

        await connectToMongoDB(process.env.MONGODB_URI);

        const deletedPost = await Blog.findByIdAndDelete(id);

        if (!deletedPost) {
            return response.status(404).json({ error: "Blog post not found." });
        }

        return response.status(200).json({ message: "Blog post deleted successfully", data: deletedPost });
    } catch (error) {

        return response.status(500).json({ error: "Failed to delete blog post. Please check server logs for details." });
    }

    } else if (request.method === 'PUT') {
        
        try {
            const { id } = request.query;
            const { title, message } = request.body;
    
            if (!id) {

                return response.status(400).json({ error: "ID parameter is required." });
            }
    
            await connectToMongoDB(process.env.MONGODB_URI);
    
            let post = await Blog.findById(id);
    
            if (!post) {
                return response.status(404).json({ error: "Blog post not found." });
            }
    
           
            if (title) {
                post.title = title;
            }
    
            if (message) {
                post.message = message;
            }
    
            post = await post.save();
    
            return response.status(200).json({ message: "Blog post updated successfully", data: post });
        } catch (error) {
            console.error("Error updating blog post:", error);
            return response.status(500).json({ error: "Failed to update blog post. Please check server logs for details." });
        }

    } 
    else {
        return response.status(405).json({ error: "Method Not Allowed" });
    }
}


