import React from 'react'
import './Project.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material'; 
import LinkIcon from '@mui/icons-material/Link'; 
import { Home } from '../../pages/home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  
// const fadeImages = [
//     {
//     url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus2.jpg?x95317',
//     caption: 'First Slide'
//     },
//     {
//     url: 'https://srmap.edu.in/wp-content/uploads/2022/03/IWD-2022-9-of-12-scaled.jpg?x95317',
//     caption: 'Second Slide'
//     },
//     {
//     url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus1.jpg?x95317',
//     caption: 'Third Slide'
//     },
//    { url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus-life-.jpg?x95317',
//     caption: 'Third Slide'
//     },
//     { url: 'https://srmap.edu.in/wp-content/uploads/2022/05/art.jpg?x95317',
//     caption: 'Third Slide'
//     },
//     { url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus4.jpg?x95317',
//     caption: 'Third Slide'
//     },
//   ];https://srmap.edu.in/wp-content/uploads/2022/03/IWD-2022-9-of-12-scaled.jpg?x95317
function Project( {link,link1,link2,description,heading,page}) {
    
  return (
    <div className='Gallery' id="gallery">
        <div whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }} className='Gallery__left'>
            <h1>
           {heading}
            </h1>
            <Button target='_blank' href={link1} variant="contained"><GitHubIcon/>GitHub</Button>
        </div>
        <div whileInView={{scale:[0.8,1], opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }} className='Gallery__right'> 
        {page? <Home project={true}/>:<img alt={heading}src={link}/>}
        
        <h4>{description}</h4>
        {link2 && <div className='card__bottom'><p>View Live </p>
        <IconButton  target='_blank' href={link2} ><ArrowForwardIcon/></IconButton>
        </div>}
        </div>
     
      </div>
  )
}

export default Project