"use client";

import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
// import FeaturesSecond from "./components/FeaturesSecond.jsx";
import NewItems from "./components/NewItems.jsx";
import Products from "./components/Products.jsx";
import { navigation, features, hero, newInStore, products, testimonial, newsletter, footer } from "./data";
import Testimonial from "./components/Testimonial.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

export default function Home() {
    return (
        <main className="w-full max-w-[1440px] mx-auto bg-white">
            <Header navigation={navigation} />
            <Hero hero={hero} />
            <Features features={features} odd={false} />
            <NewItems newInStore={newInStore} />
            <Features features={features.feature2} odd={true} />
            <Products products={products} />
            <Testimonial testimonial={testimonial} />
            <Newsletter newsletter={newsletter} />
            <Footer footer={footer} />
        </main>
    )
}
