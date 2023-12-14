import { Box, Grid, Typography } from "@mui/material"
import { Images } from "../../assets"
import { HeroData } from "../../data"
import Button from "../../components/Button"
const Hero = () => {
    return (
        <>
            <Grid container className="flex justify-between p-5">
                <Grid item className="w-1/2 pt-36">
                    <Typography variant="h3">{HeroData.Hero_Heading}</Typography>
                    <Typography>{HeroData.Hero_Desc}</Typography>
                    <Box className="flex gap-2 pt-4">
                        <Box className="border border-blue-500 rounded-full p-2 bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer w-26">
                            <Button type='button' title='Get a Demo' />
                        </Box>
                        <Box className="border border-blue-500 rounded-full p-2 bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer w-26">
                            <Button type='button' title='View More' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <img src={Images.herobg} alt="hero-img" width={600} />
                </Grid>
            </Grid>
        </>
    )
}

export default Hero