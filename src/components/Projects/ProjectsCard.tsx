import Link from "next/link";

interface Props {
  title: string;
  link: string;
  description: string;
  imageUrl: string;
  isEven?: boolean;
}

const ProjectsCard = ({
  title,
  link,
  description,
  imageUrl,
  isEven,
}: Props) => {
  if (isEven) {
    return (
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <video
              className="rounded-xl w-full h-auto"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src={imageUrl} type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">{title}</h1>
            <p className="py-2 text-wrap max-w-lg">{description}</p>
            <Link href={link} passHref target="_blank">
              <button className="btn btn-primary rounded-md">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <video
              className="rounded-xl w-full h-auto"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src={imageUrl} type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">{title}</h1>
            <p className="py-2 text-wrap max-w-lg">{description}</p>
            <Link href={link} passHref target="_blank">
              <button className="btn btn-primary rounded-md">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectsCard;
