import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';

function Shipping(props) {

    const router = useRouter()
    router.push('/login')

    return (
        <Layout title="shipping">

        </Layout>
            
    );
}

export default Shipping;