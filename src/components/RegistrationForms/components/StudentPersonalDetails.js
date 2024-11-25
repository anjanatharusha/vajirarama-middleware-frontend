import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

const PersonalDetails = ({ setCurrentSection }) => {
  return (
    <>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Student Details
        </Typography>
        <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} >
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                />
                </Grid>
                <Grid item xs={12} >
                <TextField
                    required
                    fullWidth
                    id="studentId"
                    label="Student ID"
                    name="studentId"
                    autoComplete="studentId"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="dob"
                    label="Date of Birth"
                    type="date"
                    id="dob"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="gender"
                    name="gender"
                    >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} >
                <TextField
                    name="school"
                    fullWidth
                    id="school"
                    label="School"
                    autoFocus
                />
                </Grid>   
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    {/* <Button
                        onClick={() => setCurrentSection('personalDetails')}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 5}}
                    >
                        Back
                    </Button> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={() => setCurrentSection('contactDetails')}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 5}}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
            
        </Box>
    </>
  )
}

export default PersonalDetails