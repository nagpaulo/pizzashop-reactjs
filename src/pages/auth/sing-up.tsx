import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMutation } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { string, z } from 'zod';
import { registerRestaurant } from '../../api/register-restaurant';
 
const SignUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: string(),
    email: z.string().email(),
})

type SignUpForm = z.infer<typeof SignUpForm>

export default function SignUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

    const { mutateAsync: resgiterRestaurantFn } = useMutation({
        mutationFn: registerRestaurant
    })

    async function handleSignUp(data: SignUpForm){
        try {
            await resgiterRestaurantFn({
                restaurantName: data.restaurantName,
                managerName: data.managerName,
                phone: data.phone,
                email: data.email,
            })
    
            toast.success('Restaurante cadastrado com sucesso!', {
                action: {
                    label: 'Login',
                    onClick: () => navigate(`/sign-in?email=${data.email}`)
                }
            })
            
        } catch (error) {
            toast.error("Erro ao cadastrar restaurante")
        }

    }

    return (
        <>        
            <Helmet title='Cadastro' />
            <div className='p-8'>
                <Button variant="ghost" asChild className='absolute right-8 top-8'>
                    <Link to="/sign-in">
                        Fazer login
                    </Link>
                </Button>
                <div className='w-[350px] flex flex-col justify-center gap-6'>
                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>
                            Criar conta grátis
                        </h1>
                        <p className='text-sm text-muted-foreground'>Seja parceiro e comece suas vendas!</p>
                    </div>
                    <form className='space-y-4' onSubmit={handleSubmit(handleSignUp)}>
                        <div className='space-y-2'>
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input id='restaurantName' type='text' {...register('restaurantName')} />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input id='managerName' type='text' {...register('managerName')} />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id='email' type='email' {...register('email')} />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input id='phone' type='tel' {...register('phone')} />
                        </div>

                        <Button disabled={ isSubmitting } className='w-full' type='submit'>
                            Finalizar cadastro
                        </Button>
                        <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
                            Ao continuar, você concorda com nosso {' '}
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href='' className='underline underline-offset-4'>
                                termo de serviço
                            </a> e {' '}
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a href='' className='underline underline-offset-4'>
                                politica de privacidade
                            </a>?
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
}