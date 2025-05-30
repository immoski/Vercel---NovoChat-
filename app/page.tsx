"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ChevronDown,
  X,
  Plus,
  Mic,
  ArrowUp,
  Search,
  Home,
  BarChart3,
  FolderOpen,
  CheckSquare,
  Clock,
  Users,
  HelpCircle,
  Building,
  Layers,
  UserPlus,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const hasContent = inputValue.trim().length > 0

  const sendMessage = async () => {
    if (!hasContent) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(userMessage.content),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("contract") && input.includes("stoneboy")) {
      return "✅ The latest changes to the contract with Stoneboy Construction Corp. were made on May 24, 2025."
    } else if (input.includes("hello") || input.includes("hi")) {
      return "Hello! I'm here to help you with any questions about your projects and contracts."
    } else if (input.includes("help")) {
      return "I can help you with information about your projects, contracts, files, and general questions. What would you like to know?"
    } else if (input.includes("project")) {
      return "I can see you have access to Project Drive and VET folders. Would you like me to help you with anything specific about these projects?"
    } else {
      return "I understand you're asking about that. Let me help you find the information you need. Could you provide more specific details?"
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-semibold text-lg text-gray-900">Novologic</span>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 pr-8 bg-gray-50 border-gray-200 focus:border-gray-300" />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
              ⌘K
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4">
          <nav className="space-y-1">
            <div className="flex items-center justify-between py-2 px-3 text-gray-900 bg-gray-100 rounded-lg">
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">Home</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">Dashboard</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <FolderOpen className="w-4 h-4" />
                <span className="text-sm">Projects</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <CheckSquare className="w-4 h-4" />
                <span className="text-sm">Tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">8</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center justify-between py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Reporting</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4" />
                <span className="text-sm">Teams</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>
        </div>

        {/* Support */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm">Support</span>
            </div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Online</span>
          </div>
        </div>

        {/* Get Started Progress */}
        <div className="px-4 py-4 border-t border-gray-200">
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">Get Started</span>
              <span className="text-xs text-gray-500">Step 1 of 4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-yellow-400 h-1 rounded-full" style={{ width: "25%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-600">Account created</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-500">Create your organisation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-500">Create your project</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-500">Add your team</span>
            </div>
          </div>

          <Button variant="outline" className="w-full mt-3 text-sm">
            Continue setup
          </Button>
        </div>

        {/* User Profile */}
        <div className="px-4 py-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">AA</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">Aditya Arya</div>
              <div className="text-xs text-gray-500 truncate">aditya@stoneboy.com</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
          <p
            className="mt-1"
            style={{
              color: "#535862",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "24px",
              wordWrap: "break-word",
            }}
          >
            Welcome back, Aditya!
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl space-y-6">
            {/* Create Organization Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Create your organization</h3>
                    <p className="text-gray-600">Add yourself or import from CSV</p>
                  </div>
                </div>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Organization
                </Button>
              </div>
            </div>

            {/* Create Project Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3
                    style={{
                      color: "#414651",
                      fontSize: "16px",
                      fontFamily: "Inter",
                      fontWeight: 600,
                      lineHeight: "24px",
                      wordWrap: "break-word",
                    }}
                  >
                    Create a project
                  </h3>
                  <p className="text-gray-600">Dive into the editor and start creating</p>
                </div>
              </div>
            </div>

            {/* Add Team Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Add your team mates</h3>
                  <p className="text-gray-600">Dive into the editor and start creating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AskNovo Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 inline-flex justify-center items-center overflow-hidden transition-all duration-200 hover:shadow-lg"
          style={{
            paddingLeft: "18px",
            paddingRight: "18px",
            paddingTop: "12px",
            paddingBottom: "12px",
            background: "#FBBF24",
            boxShadow: "0px 4px 12px rgba(251, 191, 36, 0.3)",
            borderRadius: "100px",
            gap: "6px",
          }}
        >
          <div style={{ width: "20px", height: "20px", position: "relative", overflow: "hidden" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2059_395)">
                <path
                  d="M5.4165 10.8337L6.07022 12.1411C6.29146 12.5836 6.40208 12.8048 6.54986 12.9965C6.681 13.1667 6.83351 13.3192 7.00363 13.4503C7.19535 13.5981 7.41659 13.7087 7.85907 13.9299L9.1665 14.5837L7.85907 15.2374C7.41659 15.4586 7.19535 15.5692 7.00363 15.717C6.83351 15.8482 6.681 16.0007 6.54986 16.1708C6.40208 16.3625 6.29146 16.5837 6.07022 17.0262L5.4165 18.3337L4.76279 17.0262C4.54155 16.5837 4.43093 16.3625 4.28315 16.1708C4.15201 16.0007 3.9995 15.8482 3.82938 15.717C3.63766 15.5692 3.41642 15.4586 2.97393 15.2374L1.6665 14.5837L2.97393 13.9299C3.41642 13.7087 3.63766 13.5981 3.82938 13.4503C3.9995 13.3192 4.15201 13.1667 4.28315 12.9965C4.43093 12.8048 4.54155 12.5836 4.76279 12.1411L5.4165 10.8337Z"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4998 1.66699L13.482 4.22067C13.717 4.8317 13.8345 5.13721 14.0173 5.39419C14.1792 5.62195 14.3782 5.82095 14.606 5.9829C14.863 6.16563 15.1685 6.28313 15.7795 6.51814L18.3332 7.50033L15.7795 8.48251C15.1685 8.71752 14.863 8.83503 14.606 9.01775C14.3782 9.1797 14.1792 9.3787 14.0173 9.60646C13.8345 9.86344 13.717 10.169 13.482 10.78L12.4998 13.3337L11.5177 10.78C11.2826 10.169 11.1651 9.86344 10.9824 9.60646C10.8205 9.3787 10.6215 9.1797 10.3937 9.01775C10.1367 8.83503 9.83121 8.71752 9.22019 8.48251L6.6665 7.50033L9.22019 6.51814C9.83121 6.28313 10.1367 6.16563 10.3937 5.9829C10.6215 5.82095 10.8205 5.62195 10.9824 5.39419C11.1651 5.13721 11.2826 4.8317 11.5177 4.22067L12.4998 1.66699Z"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2059_395">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            style={{
              paddingLeft: "2px",
              paddingRight: "2px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: 600,
                lineHeight: "24px",
                wordWrap: "break-word",
              }}
            >
              AskNovo
            </div>
          </div>
        </button>

        {/* Chat Window */}
        <div
          className={`fixed top-0 right-0 w-96 h-full bg-white shadow-2xl border-l flex flex-col z-50 transition-transform duration-300 ease-in-out ${
            isChatOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold text-gray-900">AskNovo</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(false)} className="p-1 h-8 w-8">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-yellow-600 mb-2">Hello, Aditya</h3>
                  <p className="text-gray-500 text-sm">Ask me anything about your projects!</p>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        message.sender === "user" ? "bg-yellow-100 text-gray-900" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="w-full flex flex-col justify-end items-center" style={{ gap: "6px" }}>
              <div className="w-full flex flex-col justify-start items-start" style={{ gap: "6px" }}>
                <div
                  className="w-full flex flex-col justify-start items-start overflow-hidden transition-all duration-200"
                  style={{
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    background: "white",
                    boxShadow: "0px 1px 2px rgba(10, 12.67, 18, 0.05)",
                    borderRadius: "8px",
                    outline: `1px ${isFocused || hasContent ? "#FBBF24" : "#D5D7DA"} solid`,
                    outlineOffset: "-1px",
                    gap: "8px",
                  }}
                >
                  <div className="w-full h-6 flex flex-col justify-end">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask anything..."
                      className="w-full h-full bg-transparent border-none outline-none resize-none"
                      style={{
                        color: inputValue ? "black" : "#717680",
                        fontSize: "16px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "24px",
                        wordWrap: "break-word",
                      }}
                    />
                  </div>
                  <div className="w-full h-6 flex justify-between items-center">
                    <div className="w-6 h-6 p-1 flex justify-center items-center">
                      <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex justify-start items-center" style={{ gap: "4px" }}>
                      {hasContent ? (
                        <button
                          onClick={sendMessage}
                          className="w-6 h-6 rounded-full flex justify-center items-center transition-all duration-200 hover:scale-105"
                          style={{ background: "#FBBF24" }}
                        >
                          <ArrowUp className="w-4 h-4 text-black" />
                        </button>
                      ) : (
                        <div className="w-6 h-6 p-1 flex justify-center items-center">
                          <Mic className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
