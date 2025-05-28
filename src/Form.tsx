"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Users,
  Stethoscope,
  Clock,
  Send,
  RotateCcw,
} from "lucide-react";

export function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    ward: "",
    grievance: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    ward: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ category: "", ward: "" });

    // Validate required fields
    const newErrors = { category: "", ward: "" };

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.ward) {
      newErrors.ward = "Please select a ward";
    }

    // If there are errors, set them and return
    if (newErrors.category || newErrors.ward) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);

    // Navigate to success page
    navigate("/form-submitted", {
      state: {
        submissionData: formData,
        submissionTime: new Date().toISOString(),
      },
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      ward: "",
      grievance: "",
    });
    setErrors({ category: "", ward: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            तक्रार फॉर्म भरा
          </h1>
          <p className="text-gray-600">
            This form will be reviewed by the appropriate Thane City government
            department
          </p>
        </div>

        <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow w-full pt-0">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200 pb-3 rounded-t-2xl">
            <CardTitle className="flex items-center gap-2 text-orange-800 mt-5">
              <FileText className="w-5 h-5" />
              Grievance Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    पूर्ण नाव *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    ई-मेल पत्ता *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  फोन नंबर *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Subject Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    श्रेणी *
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => {
                      handleInputChange("category", value);
                      if (errors.category) {
                        setErrors((prev) => ({ ...prev, category: "" }));
                      }
                    }}
                    required
                  >
                    <SelectTrigger
                      className={`border-gray-300 focus:border-orange-500 focus:ring-orange-500 ${
                        errors.category ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TMC" className="flex items-center">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          TMC (Thane Municipal Corporation)
                        </div>
                      </SelectItem>
                      <SelectItem value="TMT" className="flex items-center">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          TMT (Thane Municipal Transport)
                        </div>
                      </SelectItem>
                      <SelectItem value="Medical" className="flex items-center">
                        <div className="flex items-center gap-2">
                          <Stethoscope className="w-4 h-4" />
                          Medical Services
                        </div>
                      </SelectItem>
                      <SelectItem value="SRA" className="flex items-center">
                        <div className="flex items-center gap-2">
                          <Stethoscope className="w-4 h-4" />
                          SRA (Slum Rehabilitation Authority)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-sm text-red-600">{errors.category}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    वार्ड / कॉर्पोरेटर *
                  </Label>
                  <Select
                    value={formData.ward}
                    onValueChange={(value) => {
                      handleInputChange("ward", value);
                      if (errors.ward) {
                        setErrors((prev) => ({ ...prev, ward: "" }));
                      }
                    }}
                    required
                  >
                    <SelectTrigger
                      className={`border-gray-300 focus:border-orange-500 focus:ring-orange-500 ${
                        errors.ward ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select ward" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">
                        Ward A / Tembi Naka - Shree Naresh Maske
                      </SelectItem>
                      <SelectItem value="B">
                        Ward B / Wagle Estate - Shree Manoj Shinde
                      </SelectItem>
                      <SelectItem value="C">
                        Ward C / Kalwa - Shree Rajandra Sapte
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.ward && (
                    <p className="text-sm text-red-600">{errors.ward}</p>
                  )}
                </div>
              </div>

              {/* Grievance Description */}
              <div className="space-y-2">
                <Label
                  htmlFor="grievance"
                  className="text-sm font-medium text-gray-700"
                >
                  तुमच्या तक्रारीचा वर्णन करा *
                </Label>
                <Textarea
                  id="grievance"
                  placeholder="Please provide detailed information about your grievance..."
                  value={formData.grievance}
                  onChange={(e) =>
                    handleInputChange("grievance", e.target.value)
                  }
                  className="min-h-[120px] border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                  required
                />
                <p className="text-xs text-gray-500">
                  Please be as specific as possible to help us address your
                  concern effectively.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  तक्रार सादर करा
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClear}
                  className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-50 font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Clear Form
                </Button>
              </div>
            </form>

            {/* Additional Information */}
            <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-medium text-orange-800 mb-2">
                Important Information:
              </h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>
                  • Your grievance will be reviewed within 7-10 business days
                </li>
                <li>• You will receive updates via email and SMS</li>
                <li>
                  • For urgent matters, please contact the emergency helpline
                </li>
                <li>• All information provided will be kept confidential</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
