import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <>
      <ProfileCard
        userName="Ada Lovelace"
        imageUrl="https://i.imgur.com/YfeOqp2.jpeg"
        description="Pioneer in programming and mathematician"
      />
      <ProfileCard
        userName="Grace Hopper"
        imageUrl="https://i.imgur.com/tk5Ziro.jpeg"
        description="Pioneer in compilers and COBOL."
      />
      <ProfileCard
        userName="Margaret Hamilton"
        imageUrl="https://i.imgur.com/t2yUXL6.jpeg"
        description="Director of Software Engineering for the Apollo Project."
      />
    </>
  )
}

export default App
