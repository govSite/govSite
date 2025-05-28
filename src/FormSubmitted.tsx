"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  ArrowLeft,
  Download,
  Share2,
} from "lucide-react";

export function FormSubmitted() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get submission data from navigation state
  const submissionData = location.state?.submissionData;
  const submissionTime = location.state?.submissionTime;

  // Generate a mock reference number
  const referenceNumber = `GRV-${Date.now().toString().slice(-8)}`;

  // Format submission time
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handleDownloadReceipt = () => {
    // Mock download functionality
    console.log("Downloading receipt...");
  };

  const handleShareReference = () => {
    if (navigator.share) {
      navigator.share({
        title: "Grievance Reference Number",
        text: `Your grievance has been submitted. Reference: ${referenceNumber}`,
      });
    } else {
      navigator.clipboard.writeText(referenceNumber);
      alert("Reference number copied to clipboard!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            तक्रार यशस्वीरित्या सादर केली!
          </h1>
          <p className="text-gray-600 text-lg">
            Your grievance has been successfully submitted
          </p>
        </div>

        {/* Reference Card */}
        <Card className="border-green-200 shadow-lg mb-6 pt-0">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200 pt-5 rounded-t-xl">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <FileText className="w-5 h-5" />
              Submission Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Reference Number</p>
                    <p className="font-mono text-lg font-semibold text-gray-900">
                      {referenceNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Submitted On</p>
                    <p className="font-medium text-gray-900">
                      {submissionTime ? formatDate(submissionTime) : "Just now"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Expected Response</p>
                    <p className="font-medium text-gray-900">
                      7-10 business days
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Under Review
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submission Summary */}
        {submissionData && (
          <Card className="border-gray-200 shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <User className="w-5 h-5" />
                Submission Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{submissionData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {submissionData.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      {submissionData.phone}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <Badge variant="outline">{submissionData.category}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ward</p>
                    <p className="font-medium">{submissionData.ward}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">
                  Grievance Description
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{submissionData.grievance}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            onClick={handleDownloadReceipt}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Receipt
          </Button>

          <Button
            onClick={handleShareReference}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share Reference
          </Button>

          <Button
            onClick={handleGoBack}
            className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Submit Another Grievance
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="border-blue-200 shadow-lg p-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 pt-5 rounded-t-xl">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Clock className="w-5 h-5" />
              What Happens Next?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Acknowledgment</h4>
                  <p className="text-sm text-gray-600">
                    You will receive an SMS and email confirmation within 24
                    hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Review Process</h4>
                  <p className="text-sm text-gray-600">
                    Your grievance will be assigned to the appropriate
                    department for review
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Resolution</h4>
                  <p className="text-sm text-gray-600">
                    You will be contacted with updates and the final resolution
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> Please save your reference number{" "}
                <strong>{referenceNumber}</strong> for future correspondence.
                You can use this number to track your grievance status.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
