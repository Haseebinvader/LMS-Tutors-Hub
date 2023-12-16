import { Box, Grid, Typography } from "@mui/material";
import { Images } from "../../assets";
import { HeroData } from "../../data";
import Button from "../../components/Button";

const Hero = () => {
    return (
        <>
            <Grid container className="flex flex-col lg:flex-row px-24 py-5">
                {/* Content for large screens */}
                <Grid item className="lg:w-1/2 lg:pt-36">
                    <Typography variant="h3">{HeroData.Hero_Heading}</Typography>
                    <Typography>{HeroData.Hero_Desc}</Typography>
                    <Box className="flex flex-col lg:flex-row lg:gap-2 pt-4">
                        <Box className="border border-blue-500 rounded-full p-2 bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer mb-2 lg:mb-0">
                            <Button type="button" title="Get a Demo" />
                        </Box>
                        <Box className="border border-blue-500 rounded-full p-2 bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer">
                            <Button type="button" title="View More" />
                        </Box>
                    </Box>
                </Grid>

                {/* Image for all screen sizes */}
                <Grid item className="lg:w-1/2">
                    <img src={Images.herobg} alt="hero-img" className="w-full" />
                </Grid>
            </Grid>
        </>
    );
};

export default Hero;
