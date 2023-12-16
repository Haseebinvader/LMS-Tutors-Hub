import { Button, Grid, Typography } from "@mui/material";

const AuthRoute = () => {
    return (
        <>
            <Grid container>
                <Grid item className="lg:w-1/2 bg-red-500 text-white h-48 ">
                    <Typography>Become a Tutor</Typography>
                    <Typography>Join the community of Skillfull Tutors</Typography>
                    <Button>Join now</Button>
                </Grid>
                <Grid item className="lg:w-1/2 bg-blue-500 text-white ">
                    <Typography>Become a Student</Typography>
                    <Typography>Join the community of Students</Typography>
                    <Button>Join now</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default AuthRoute;
