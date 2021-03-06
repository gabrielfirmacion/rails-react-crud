class PostController < ApplicationController

  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    @post.save

    redirect_to '/'
  end

  private
    def post_params
      params.require(:post).permit(:name, :description)
    end
end
