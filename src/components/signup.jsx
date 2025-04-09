import React, { useState } from 'react'
import axios from 'axios'
import {
    TextField,
    Button,
    Typography,
    Paper,
    Box,
    Divider,
    Link,
} from '@mui/material'
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon } from '@mui/icons-material'

const SignUp = ({ setUser }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        try {
            const response = await axios.post('/api/register', {
                email,
                password
            })
            setUser(response.data.user)
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed')
        }
    }

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #F2EFE7, #9ACBD0, #6A71A7, #48A6A7)',
                backgroundSize: '400% 400%',
                animation: 'gradientBG 15s ease infinite',
                '@keyframes gradientBG': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: 4,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    width: '100%',
                    maxWidth: 700,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1, paddingRight: 4 }}>
                    <Typography variant="h4" sx={{ color: '#6A71A7', marginBottom: 2, textAlign: 'center' }}>
                        Sign Up
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#6A71A7', textAlign: 'center', marginBottom: 2 }}>
                        <span>Already have an account? </span>
                        <Link
                            href="/login"
                            sx={{
                                color: '#48A6A7',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                "&:hover": { textDecoration: 'underline' }
                            }}
                        >
                            Login
                        </Link>
                    </Typography>

                    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#6A71A7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#48A6A7',
                                    },
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#6A71A7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#48A6A7',
                                    },
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#6A71A7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#48A6A7',
                                    },
                                },
                            }}
                        />
                        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{
                                marginTop: 2,
                                backgroundColor: '#48A6A7',
                                '&:hover': { backgroundColor: '#6A71A7' },
                                padding: "10px",
                                fontSize: "16px",
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ mx: 2, fontWeight: 'bold', color: '#6A71A7' }}>
                    OR
                </Divider>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Button
                        sx={{
                            width: "100%",
                            color: '#DB4437',
                            borderColor: '#DB4437',
                            '&:hover': { backgroundColor: '#DB4437', color: '#fff' },
                            textTransform: 'none',
                            padding: "12px",
                            fontSize: "16px",
                        }}
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                    >
                        Continue with Google
                    </Button>

                    <Button
                        sx={{
                            width: "100%",
                            color: '#4267B2',
                            borderColor: '#4267B2',
                            '&:hover': { backgroundColor: '#4267B2', color: '#fff' },
                            textTransform: 'none',
                            padding: "12px",
                            fontSize: "16px",
                        }}
                        variant="outlined"
                        startIcon={<FacebookIcon />}
                    >
                        Continue with Facebook
                    </Button>

                    <Button
                        sx={{
                            width: "100%",
                            color: '#000',
                            borderColor: '#000',
                            '&:hover': { backgroundColor: '#000', color: '#fff' },
                            textTransform: 'none',
                            padding: "12px",
                            fontSize: "16px",
                        }}
                        variant="outlined"
                        startIcon={<AppleIcon />}
                    >
                        Continue with Apple
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default SignUp