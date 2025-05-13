import React from "react"; 
import { appstore, playstore } from "../assets";


export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 md:gap-x-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  We're hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hire interns for your company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Team Diary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Free Job Alerts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resume Maker
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  College TPO registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  List of Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jobs for Women
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: App Badges */}
          <div className="md:col-span-2 lg:col-span-2 flex items-center justify-center md:justify-start gap-4">
            <a href="#">
              <img
                src={playstore}
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src={appstore}
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>

          {/* Column 6: Social Media */}
          <div className="col-span-2 lg:col-span-6 flex justify-center md:justify-between pt-8 border-t border-gray-700 mt-8 text-sm">
            <p>
              &copy; {new Date().getFullYear()} InterConnect. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              {/* Replace # with actual links */}
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
