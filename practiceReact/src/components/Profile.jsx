import Card from "./Card";

const Profile = () => {
  const userData = [
    {
      id: "1",
      name: "John Doe",
      profession: "IT Support",
      experience: "4",
      imgProfile:
        "https://i.pinimg.com/736x/ff/02/6d/ff026d488a2c32affc95fd0aac3d7d9c.jpg",
    },
    {
      id: "2",
      name: "Rose Anne",
      profession: "UI/UX Designer",
      experience: "2",
      imgProfile:
        "https://i.pinimg.com/736x/6a/f9/f6/6af9f6a89e7a1fb47c95d6b682959601.jpg",
    },
    {
      id: "3",
      name: "Joe Jenner",
      profession: "Marketing Head",
      experience: "6",
      imgProfile:
        "https://i.pinimg.com/736x/09/6c/ed/096ced12ba67edfd972a97c5c2e94e66.jpg",
    },
    {
      id: "4",
      name: "Anne Hath",
      profession: "HR",
      experience: "8",
      imgProfile:
        "https://i.pinimg.com/736x/f3/35/6b/f3356b4766c2e0e2223a055cd3211fc0.jpg",
    },
  ];

  return (
    <>
      <div className="userProfile">
        {userData.map((user, i) => {
          return <Card key={i} {...user} />;
        })}
      </div>
    </>
  );
};
export default Profile;
