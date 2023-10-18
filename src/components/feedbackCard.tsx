// Make it carousel like
import Image from "next/image";
export default function FeedbackCard() {
  return (
    <div className="relative">
      <Image
        src="/feedback/person1.svg"
        height={280}
        width={203}
        alt="person1"
      />
      <div className="bg-feedbackCard bg-opacity-40 p-1 rounded-lg absolute -right-24 left-10 bottom-4">
        <div className=" p-3 rounded-lg flex flex-col items-start bg-feedbackCard">
          <h1 className="text-lg">Naura</h1>
          <p className="text-sm">
            I really love the cappucino, the coffee was very smooth{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
