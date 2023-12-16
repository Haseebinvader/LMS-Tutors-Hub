import { Avatar, Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { coursesData } from "../../data";

const Courses = () => {
    return (
        <Box sx={{ backgroundColor: '#f2f2f2', py: '30px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase' }}>
                Our Top Courses - Taught By Experts
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {coursesData.map((item, index) => (
                    <Grid item key={index}>
                        <Card sx={{ minWidth: 320, height: 'auto', textAlign: "center" }}>
                            <CardMedia sx={{ height: 250 }} image={item.Image} />
                            <CardContent>
                                <Box sx={{ p: '10px' }}>
                                    <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: '600', fontSize: '20px', marginBottom: '1rem' }}>
                                        {item.Course_Name}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase', fontSize: '16px', color: 'text.secondary', marginBottom: '0.5rem' }}>
                                        {item.Class}
                                    </Typography>
                                    <Typography variant="h6" sx={{ textTransform: 'uppercase', fontSize: '20px', color: 'primary.main' }}>
                                        PKR - {item.Fee}
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem", gap: "1rem" }}>
                                    <Avatar src={item.instructorAvatar} />
                                    <Box>{item.Instructor}</Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Courses;
