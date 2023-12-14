import { Box, Grid, Typography } from '@mui/material'
import { NavLinks } from '../data'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <Grid container className=' p-5 flex justify-between'>
      <Grid item>
        <Typography className='uppercase hover:text-red-400 hover:font-bold cursor-pointer'>Logo</Typography>
      </Grid>
      <Grid item className='lg:flex gap-4 uppercase'>
        {NavLinks.map((item, index) => (
          <Box key={index}>
            <Link to={item.href} className='hover:text-red-400 hover:font-bold cursor-pointer'>{item.Value}</Link>
          </Box>
        ))}
      </Grid>
      <Grid item className="border border-blue-500 rounded-full p-2 bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer">
        <Button type='button' title='Authentication' />
      </Grid>
    </Grid>
  )
}

export default Navbar