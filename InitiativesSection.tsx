
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradient } from "./ui/aceternity/background-gradient";

const InitiativesSection = () => {
  const initiatives = [
    {
      title: "Affordable Education",
      description: "Fighting for reduced textbook costs, advocating for more scholarships, and pushing for transparent tuition policies.",
      status: "Priority",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Mental Health Support",
      description: "Expanding mental health resources, promoting wellness workshops, and implementing stress-reduction policies during exam periods.",
      status: "Priority",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Academic Flexibility",
      description: "Advocating for expanded Cr/D/F options, more inclusive assessment methods, and academic accommodations for diverse learning needs.",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "Inclusive Science Education",
      description: "Working with faculty to ensure science education at UBC is accessible and inclusive for students of all backgrounds and abilities.",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Undergraduate Research",
      description: "Creating more opportunities for undergraduates to engage in meaningful research experiences with faculty mentorship.",
      status: "Planned",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Student Voice & Transparency",
      description: "Ensuring student perspectives are heard in all academic governance decisions through regular consultation and open forums.",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Priority":
        return "text-red-600 bg-red-100";
      case "In Progress":
        return "text-yellow-600 bg-yellow-100";
      case "Planned":
        return "text-blue-600 bg-blue-100";
      case "Ongoing":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section id="initiatives" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-ubc-blue mb-6">
            My Platform
          </h2>
          <p className="text-xl text-ubc-grey max-w-3xl mx-auto">
            Key issues I'm committed to addressing as your Faculty of Science Senator
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <BackgroundGradient key={index} className="w-full" containerClassName="p-6">
              <Card className="border-none bg-transparent shadow-none h-full">
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-serif text-ubc-blue">{initiative.title}</CardTitle>
                  <div className={`${getStatusColor(initiative.status)} text-xs px-2 py-1 rounded-full w-fit mt-2`}>
                    {initiative.status}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-ubc-grey text-sm">
                    {initiative.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
