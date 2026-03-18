import DestinationCard1 from "@/components/Card/DestinationCard1";

const mock = [
  { label: "Spain", imageURL: "/image/destination/spain.jpg" },
  //   { label: "South Korea", imageURL: "/image/destination/korea.jpg" },
  //   { label: "Canada", imageURL: "/image/destination/canada.jpg" },
  { label: "Cambodia", imageURL: "/image/destination/Cambodia.jpg" },
  { label: "London", imageURL: "/image/destination/london.jpg" },
  { label: "Japan", imageURL: "/image/destination/japan.jpg" },
];
const Destination = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {mock.map((item) => (
        <DestinationCard1
          key={item.label}
          label={item.label}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  );
};

export default Destination;
