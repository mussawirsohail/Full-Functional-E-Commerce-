"use client"

import { useState } from "react"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() === "") return

    const comment: Comment = {
      id: Date.now(),
      author: "Anonymous User", // You can replace this with actual user data if available
      content: newComment,
      date: new Date().toLocaleDateString(),
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="mb-2 border rounded p-2 w-full"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit Comment</button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 mr-2 bg-gray-300 rounded-full flex items-center justify-center">
                <span>{comment.author[0]}</span>
              </div>
              <span className="font-semibold">{comment.author}</span>
              <span className="text-gray-500 text-sm ml-2">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
