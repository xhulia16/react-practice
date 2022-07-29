export type Movie={
    id:number, 
    title: string,
    thumbnail: string, 
    inCart: boolean, 
    price:number}


const MovieList: Array<Movie>=[
{
    id:1, 
    title:'Everything Everywhere All At Once', 
    thumbnail: 'https://dx35vtwkllhj9.cloudfront.net/a24films/everything-everywhere-all-at-once/images/regions/us/onesheet.jpg',
    inCart:true, 
    price: 8.25
}, 
{
    id:2, 
    title:'Raise the Red Lantern', 
    thumbnail: 'https://m.media-amazon.com/images/M/MV5BNDMxMTc2N2ItMjI5Ny00MGFiLThkOTYtZTIyYTZhMzA2NjIzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg',
    inCart:false, 
    price: 9.5
}, 
{
    id:3, 
    title:'Shoplifters', 
    thumbnail: 'https://posterspy.com/wp-content/uploads/2020/11/Shoplifters-scaled.jpg', 
    inCart:true, 
    price: 9.5
}
]

export default MovieList