
import { WavyBackground } from "./ui/aceternity/wavy-background";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const senateResponsibilities = [
    {
      title: "Academic Policies",
      description: "Senators review and approve academic policies that directly impact student learning"
    },
    {
      title: "Student Advocacy",
      description: "Student senators bring important issues from the student body to senate attention"
    },
    {
      title: "Curriculum Approval",
      description: "Reviewing and approving new courses, programs, and educational initiatives"
    },
    {
      title: "University Governance",
      description: "Participating in one of UBC's highest governing bodies to shape the university's future"
    }
  ];

  return (
    <section id="about" className="py-20">
      <WavyBackground className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            What Does a Student Senator Do?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Student Senators represent your interests in UBC's academic governance, advocating for policies and changes that improve your educational experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                alt="UBC Senate" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {senateResponsibilities.map((item, index) => (
                <Card key={index} className="bg-white/95 border-none hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-ubc-blue font-serif">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-ubc-grey text-sm">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/90 rounded-lg p-6 shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-ubc-blue mb-4">How I'll Represent You</h3>
          <p className="text-ubc-grey mb-4">
            As your Science Senator, I promise to actively listen to student concerns, attend all Senate 
            and committee meetings, and vote with student interests as my top priority. I will maintain open
            communication with the student body and provide regular updates on Senate activities.
          </p>
          <p className="text-ubc-grey">
            I firmly believe that student representation in governance is essential for creating a 
            university that works for all of us. Your feedback and concerns will directly shape my advocacy
            and help create positive change for the UBC community.
          </p>
        </div>
      </WavyBackground>
    </section>
  );
};

export default AboutSection;
