import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import digital from './digital.jpeg'
import care from './care.jpeg'
import europe from './europe.jpeg'
import karaoke from './karaoke.jpeg'
import kundalin from './kundallin.jpeg'
import rise from './rise.jpeg'
import shore from './shore.jpeg'
import futures from './futures.jpeg'
import Music from './Music.svg'
import Arts from './Arts.svg'
import Dating from './Dating.svg'
import Business from './Business.svg'
import Food_Drink from './Food_Drink.svg'
import Nightlife from './Nightlife.svg'
import Hobbies from './Nightlife.svg'
import Religion from './Religion.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const eventsType = [
    {
        category: 'Music',
        image: Music
    },
    {
        category: 'Nightlife',
        image: Nightlife
    },
    {
        category: 'Performing & Visual Arts',
        image: Arts
    },
    {
        category: 'Religion',
        image: Religion
    },
    {
        category: 'Dating',
        image: Dating
    },
    {
        category: 'Hobbies',
        image: Hobbies
    },
    {
        category: 'Business',
        image: Business
    },
    {
        category: 'Food & Drink',
        image: Food_Drink
    },
]

export const allEvents = [
    {
        _id: 'evt32',
        title: 'Digital Wellbeing: A Crash Course',
        image: digital,
        category: 'Technology',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'evt2',
        title: 'Digital Wellbeing: A Crash Course',
        image: care,
        category: 'Health',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'evt3',
        title: 'Digital Wellbeing: A Crash Course',
        image: europe,
        category: 'Travel',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'evt4',
        title: 'Digital Wellbeing: A Crash Course',
        image: karaoke,
        category: 'Travel',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'evt5',
        title: 'Digital Wellbeing: A Crash Course',
        image: kundalin,
        category: 'Travel',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'evt6',
        title: 'Digital Wellbeing: A Crash Course',
        image: shore,
        category: 'Travel',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'evt7',
        title: 'Digital Wellbeing: A Crash Course',
        image: rise,
        category: 'Travel',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        title: 'Digital Wellbeing: A Crash Course',
        image: futures,
        category: 'Travel',
        location: 'The Podium',
        date: 'Tuesday, October 22, 2024',
        about: 'In today’s hyper-connected world, finding balance between our digital lives and overall health is essential. Join our Digital Wellbeing Crash Course to discover practical strategies for maintaining a healthier relationship with technology. Whether you’re glued to your smartphone or spend hours online, this crash course will empower you to make intentional choices that enhance your wellbeing.',
        organizer: 'Rain Water Growth',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
]