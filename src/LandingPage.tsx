import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Stethoscope, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import shinde from "@/assets/shinde.png";

const LOCAL_STORAGE_KEY = "grievancesSolved";

export function LandingPage() {
  const navigate = useNavigate();
  const [grievancesSolved, setGrievancesSolved] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? parseInt(saved) : 50000;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGrievancesSolved((prev) => {
        const updated = prev + 1;
        localStorage.setItem(LOCAL_STORAGE_KEY, updated.toString());
        return updated;
      });
    }, 2000); // Increment every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Department Services
          </h1>
          <p className="text-gray-600 mb-1">
            Access our services and file grievances quickly and efficiently
          </p>
          <div className="flex flex-col items-center bottom-10 gap-4 left-10 fixed mt-6 bg-orange-100/60 text-orange-800 px-10 py-4 rounded-xl shadow-md border border-orange-300">
            <img src={shinde} className="w-20 lg:w-60 rounded-2xl" alt="" />
            <div className="text-4xl font-extrabold leading-tight">
              {grievancesSolved.toLocaleString()}
            </div>
            <div className="text-lg font-medium tracking-wide">
              Grievances Solved!
            </div>
          </div>
        </div>

        <div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-2 gap-6">
          {/* File Grievance - Main CTA */}
          <Card className="lg:row-span-4 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  File a Grievance
                </h2>
                <p className="text-gray-600 mb-6">
                  Submit your concerns and grievances through our secure online
                  committed to addressing your issues promptly. <br /> <br />
                  <b className=" text-orange-600">
                    शिव सेना Vachan Badha Aahe Aapli Takrar Sodvanya Sathi.
                  </b>
                </p>
              </div>
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium"
                onClick={() => {
                  navigate("form");
                }}
              >
                Aapli Takrar Nondva
              </Button>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                Average response time: 2-3 business days
              </div>
            </CardContent>
          </Card>

          {/* Department Cards */}
          <Card className="border-gray-200 hover:border-orange-300 transition-colors cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                <Users className="w-6 h-6 text-blue-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ठाणे महानगरपालिका
              </h3>
              <p className="text-gray-600 text-sm">
                Traffic Management Center services and support
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:border-orange-300 transition-colors cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                <Clock className="w-6 h-6 text-green-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ठाणे महानगरपालिका परिवहन
              </h3>
              <p className="text-gray-600 text-sm">
                Traffic Management Team coordination and assistance
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:border-orange-300 transition-colors cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                <Stethoscope className="w-6 h-6 text-red-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                वैद्यकीय / शिवाजी-रुग्णालय
              </h3>
              <p className="text-gray-600 text-sm">
                Medical services and health-related support
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:border-orange-300 transition-colors cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                <Stethoscope className="w-6 h-6 text-red-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                स्लम पुनर्विकास प्राधिकरण
              </h3>
              <p className="text-gray-600 text-sm">Your house your right</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
