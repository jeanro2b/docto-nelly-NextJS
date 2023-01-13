import ApplicationLogo from '../components/Breeze/ApplicationLogo'
import AuthCard from '../components/Breeze/AuthCard'
import Button from '../components/Breeze/Button'
import GuestLayout from '../components/Breeze/Layouts/GuestLayout'
import Input from '../components/Breeze/Input'
import InputError from '../components/Breeze/InputError'
import Label from '../components/Breeze/Label'
import Link from 'next/link'
import { useAuth } from '../hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [phone, setPhone] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            middleName,
            email,
            password,
            password_confirmation: passwordConfirmation,
            phone,
            setErrors,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                }>
                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <Label htmlFor="name">Nom</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>
                    {/* MiddleName */}
                    <div>
                        <Label htmlFor="name">Prénom</Label>

                        <Input
                            id="name"
                            type="text"
                            value={middleName}
                            className="block mt-1 w-full"
                            onChange={event => setMiddleName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Mail</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Mot de passe</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            Confirmez le mot de passe
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mt-4">
                        <Label htmlFor="password">Téléphone</Label>

                        <Input
                            id="phone"
                            type="text"
                            value={phone}
                            className="block mt-1 w-full"
                            onChange={event => setPhone(event.target.value)}
                            required
                        />

                        <InputError
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/login"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Déjà inscris ?
                        </Link>

                        <Button className="ml-4">S'inscrire</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
