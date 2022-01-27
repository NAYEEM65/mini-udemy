import { useState, useEffect } from 'react';
import './App.css';
import {
    BecomeInstructor,
    Bussiness,
    Courses,
    CourseTab,
    Education,
    FeatureTopic,
    Footer,
    Header,
    Home,
    Slider,
    TopCatagory,
    TrustedCompany,
    Cart,
} from './Component/index';
import courseData from './Component/courseData/CourseData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Component/Profile/Profile';

function App() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        const data = courseData.map((item) => {
            return item;
        });
        setCourse(data);
    }, []);
    const [cart, setcart] = useState([]);
    const handleProducts = (rabbi) => {
        console.log('added', rabbi);
        const newCart = [...cart, rabbi];
        setcart(newCart);
    };

    return (
        <Router>
            <Header cart={cart}></Header>
            <Switch>
                <Route exact path="/">
                    <Home />
                    <Courses courses={course} handleProducts={handleProducts} />
                    <CourseTab />
                    <Slider />
                    <TopCatagory />
                    <FeatureTopic />
                    <BecomeInstructor />
                    <TrustedCompany />
                    <Bussiness />
                    <Education />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/account">
                    <Profile />
                </Route>
                <Route exact path="/dashboard">
                    <Profile />
                </Route>
                <Route exact path="/logout">
                    <Profile />
                </Route>
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;
