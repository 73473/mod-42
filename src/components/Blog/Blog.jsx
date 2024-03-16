import PropTypes from 'prop-types';

const Blog = ({blog}) => {
   // console.log(blog);
   const {Title,Cover,Reading_Time,Author_img,Author} = blog;
    return (
        <div>
            <img className='w-96' src={Cover} alt={`cover picture of ${Title}`} />
            <div className='flex justify-between'>
                <div>
                     <img src={Author_img} />
                     
                </div>
                <div>
                    <span>{Reading_Time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
            
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;