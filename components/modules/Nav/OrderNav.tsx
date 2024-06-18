'use client';
import { ButtonComponent } from '@/components/elements/Button/Button';
import { Nav, NavComponent } from '@/components/elements/Nav/Nav'
import { useRouter } from 'next/navigation';
import React from 'react'

const OrderNav = () => {
    const router = useRouter();

  return (
    <>
        <Nav style='sec_nav'>
            <ButtonComponent.ButtonLink ClickHandler={(e: React.MouseEvent<HTMLButtonElement>) => router.back()}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 27L12 18L21 9L23.1 11.1L16.2 18L23.1 24.9L21 27Z" fill="#042A50"/>
                </svg>
            </ButtonComponent.ButtonLink>
            <NavComponent.NavLink href={'/'} tooltip='waiting list'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.66667 11.4V7H33V11.4H9.66667ZM9.66667 20.2V15.8H33V20.2H9.66667ZM9.66667 29V24.6H33V29H9.66667ZM4.66667 11.4C4.19445 11.4 3.79889 11.1888 3.48001 10.7664C3.16112 10.344 3.00112 9.82186 3.00001 9.2C2.99889 8.57813 3.15889 8.056 3.48001 7.6336C3.80112 7.2112 4.19667 7 4.66667 7C5.13667 7 5.53278 7.2112 5.855 7.6336C6.17723 8.056 6.33667 8.57813 6.33334 9.2C6.33 9.82186 6.17 10.3447 5.85334 10.7686C5.53667 11.1925 5.14112 11.4029 4.66667 11.4ZM4.66667 20.2C4.19445 20.2 3.79889 19.9888 3.48001 19.5664C3.16112 19.144 3.00112 18.6219 3.00001 18C2.99889 17.3781 3.15889 16.856 3.48001 16.4336C3.80112 16.0112 4.19667 15.8 4.66667 15.8C5.13667 15.8 5.53278 16.0112 5.855 16.4336C6.17723 16.856 6.33667 17.3781 6.33334 18C6.33 18.6219 6.17 19.1447 5.85334 19.5686C5.53667 19.9924 5.14112 20.2029 4.66667 20.2ZM4.66667 29C4.19445 29 3.79889 28.7888 3.48001 28.3664C3.16112 27.944 3.00112 27.4218 3.00001 26.8C2.99889 26.1781 3.15889 25.656 3.48001 25.2336C3.80112 24.8112 4.19667 24.6 4.66667 24.6C5.13667 24.6 5.53278 24.8112 5.855 25.2336C6.17723 25.656 6.33667 26.1781 6.33334 26.8C6.33 27.4218 6.17 27.9447 5.85334 28.3686C5.53667 28.7924 5.14112 29.0029 4.66667 29Z" fill="#042A50"/>
                </svg>
            </NavComponent.NavLink>
        </Nav>
    </>
  )
}

export default OrderNav