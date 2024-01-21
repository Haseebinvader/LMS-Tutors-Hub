import { Box, Grid } from '@mui/material'
import { NavLinks } from '../data'
import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from '../assets/Images/logo.jpg'

const Navbar = () => {
  return (
    <Grid container className='flex justify-between items-center max-container padding-container relative z-1 px-24 py-5'>
      <Grid item>
        <Link to='/'>
          <img src={Logo} alt="" width='60px' />
        </Link>
      </Grid>
      <Grid item className='lg:flex gap-4 uppercase hidden'>
        {NavLinks.map((item, index) => (
          <Box key={index}>
            <Link to={item.href} className='hover:text-red-400 hover:font-bold cursor-pointer  font-bold'>{item.Value}</Link>
          </Box>
        ))}
      </Grid>
      <Grid item className="lg:flex justify-center hidden bg-white p-2 px-4 rounded hover:bg-slate-300 hover:text-white shadow-md cursor-pointer">
        <Button type='button' title='Authentication' />
      </Grid>
    </Grid>
  )
}

export default Navbar