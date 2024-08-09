import React from "react";
import { Link } from "react-router-dom";

function ThirdScreen() {
  return (
    
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">Security</h3>
          <p className="text-gray-500 mb-4">Enhance your account protection and manage your security settings.</p>
    
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold border-b pb-2 mb-4">Password Management</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-semibold">Login Two-Step Verification</h5>
                    <p className="text-gray-500">Enable an extra layer of security by requiring a verification code at login.</p>
                  </div>
                  <input type="checkbox" className="toggle-checkbox" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-semibold">Email Setup</h5>
                    <p className="text-gray-500">Configure your email preferences and manage notifications.</p>
                  </div>
                  <input type="checkbox" className="toggle-checkbox" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-semibold">SMS Setup</h5>
                    <p className="text-gray-500">Set up your phone number to receive important alerts and verification codes via SMS.</p>
                  </div>
                  <input type="checkbox" className="toggle-checkbox" disabled />
                </div>
              </div>
            </div>
    
            <div>
              <h4 className="font-semibold border-b pb-2 mb-4">Password Security</h4>
              <div className="flex justify-between">
                <div>
                  <h5 className="font-semibold">Password Change</h5>
                  <p className="text-gray-500">Update your password to keep your account secure and private.</p>
                </div>
                
              </div>
            </div>
          </div>
    
          <div className="flex justify-end space-x-4 mt-8">
            <button className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Save Changes
            </button>
          </div>
        </div>
      );
    };
    
    

export default ThirdScreen;
