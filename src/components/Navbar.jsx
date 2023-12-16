import { Box, Grid, Typography } from '@mui/material'
import { NavLinks } from '../data'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <Grid container className='flex justify-between max-container padding-container relative z-30 px-24 py-5'>
      <Grid item>
        <Typography className='uppercase hover:text-red-400 hover:font-bold cursor-pointer'>Logo</Typography>
      </Grid>
      <Grid item className='lg:flex gap-4 uppercase hidden'>
        {NavLinks.map((item, index) => (
          <Box key={index}>
            <Link to={item.href} className='hover:text-red-400 hover:font-bold cursor-pointer'>{item.Value}</Link>
          </Box>
        ))}
      </Grid>
      <Grid item className="lg:flex justify-center hidden bg-white p-2 px-4 rounded hover:bg-slate-300 hover:text-white shadow-md">
        <Button type='button' title='Authentication' />
      </Grid>

    </Grid>
  )
}

export default Navbar