import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Badge,
  TextField,
  IconButton,
  Chip,
  Paper,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const initialChats = [
  {
    name: "Connie",
    message: "Lorem ipsum dolor sit amet, consect...",
    date: "27-11-2023",
    avatar: "https://i.pravatar.cc/150?img=1",
    unread: false,
    online: true,
    messages: [
      {
        from: "Connie",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "10:25am",
      },
      {
        from: "me",
        text: "Hi!",
        time: "10:30am",
      },
    ],
  },
  {
    name: "Kristin Watson",
    message: "Lorem ipsum, consect...",
    date: "27-11-2023",
    avatar: "https://i.pravatar.cc/150?img=2",
    unread: false,
    online: false,
    messages: [{
        from: "Connie",
        text: "hi , Bhanu . How are you.❤️❤️❤️.",
        time: "03:12am",
      }],
  },
  {
    name: "Eleanor Pena",
    message: "Lorem ipsum dolor",
    date: "27-11-2023",
    avatar: "https://i.pravatar.cc/150?img=3",
    unread: true,
    online: true,
    messages: [{
        from: "Connie",
        text: "hi . Gundu.......",
        time: "03:12am",
      }],
  },
];

const initialRequests = [
  {
    name: "Greg",
    avatar: "https://i.pravatar.cc/150?img=4",
    language: "English | Catholic | Mother Tongue",
    profession: "Ethnic & Software Professional",
    status: "Request Pending",
    dob: "20-Feb-1998",
    age: 26,
  },
  {
    name: "Anna Smith",
    avatar: "https://i.pravatar.cc/150?img=5",
    language: "French | Christian",
    profession: "Graphic Designer",
    status: "Approved",
    dob: "15-Mar-1995",
    age: 31,
  },
  {
    name: "Michael Johnson",
    avatar: "https://i.pravatar.cc/150?img=6",
    language: "Spanish | Catholic",
    profession: "Software Engineer",
    status: "Request Pending",
    dob: "05-Jul-1990",
    age: 33,
  },
];

export default function ChatUI() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  const [tabIndex, setTabIndex] = useState(0);
  const [chats, setChats] = useState(initialChats);
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  const [requests] = useState(initialRequests);
  const [selectedRequestIndex, setSelectedRequestIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  // NEW: track if on mobile we are showing detail view (chat or request)
  const [mobileView, setMobileView] = useState("list"); // "list" or "detail"

  const selectedChat = chats[selectedChatIndex];
  const selectedRequest = requests[selectedRequestIndex];

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
    // Reset to list view on tab change (mobile)
    setMobileView("list");
  };

  const handleChatClick = (index) => {
    const updatedChats = chats.map((chat, i) =>
      i === index ? { ...chat, unread: false } : chat
    );
    setChats(updatedChats);
    setSelectedChatIndex(index);
    if (isMobile) setMobileView("detail");
  };

  const handleRequestClick = (index) => {
    setSelectedRequestIndex(index);
    if (isMobile) setMobileView("detail");
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const updatedChats = [...chats];
    updatedChats[selectedChatIndex].messages.push({
      from: "me",
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    setChats(updatedChats);
    setInputValue("");
  };

  const handleBack = () => {
    setMobileView("list");
  };

  // Layout on mobile
  if (isMobile) {
    if (mobileView === "list") {
      return (
        <Box sx={{ mt: 8, bgcolor: "#fff", height: "65vh" }}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="My Interests" />
            <Tab label="Request" />
          </Tabs>

          {tabIndex === 0 ? (
            <>
              <Box px={2} py={1}>
                <Typography variant="body2" color="textSecondary">
                  Recent Chat
                </Typography>
              </Box>
              {chats.map((chat, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  px={2}
                  py={1.5}
                  borderBottom="1px solid #f0f0f0"
                  sx={{
                    cursor: "pointer",
                    bgcolor: index === selectedChatIndex ? "#f0f8ff" : "inherit",
                  }}
                  onClick={() => handleChatClick(index)}
                >
                  <Badge
                    color="error"
                    variant="dot"
                    invisible={!chat.unread}
                    overlap="circular"
                  >
                    <Avatar src={chat.avatar} />
                  </Badge>
                  <Box ml={2} flex={1} minWidth={0}>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      title={chat.name}
                      sx={{ fontWeight: "600" }}
                    >
                      {chat.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      noWrap
                      title={chat.message}
                    >
                      {chat.message}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </>
          ) : (
            <Box>
              {requests.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  px={2}
                  py={1.5}
                  borderBottom="1px solid #f0f0f0"
                  sx={{
                    cursor: "pointer",
                    bgcolor:
                      index === selectedRequestIndex ? "#f0f8ff" : "inherit",
                  }}
                  onClick={() => handleRequestClick(index)}
                >
                  <Avatar src={item.avatar} />
                  <Box ml={2} flex={1} minWidth={0}>
                    <Typography variant="subtitle2" noWrap title={item.name}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      noWrap
                      title={item.status}
                    >
                      {item.status}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      );
    }

    if (mobileView === "detail") {
      return (
        <Box
          sx={{
            mt: 8,
            bgcolor: "#fff",
            height: "87vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            sx={{ alignSelf: "flex-start", m: 1 }}
          >
            Back
          </Button>

          {tabIndex === 0 ? (
            <>
              {/* Chat Header */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={2}
                py={1}
                borderBottom="1px solid #ddd"
                bgcolor="#fff"
                flexShrink={0}
              >
                <Box display="flex" alignItems="center" minWidth={0}>
                  <Avatar src={selectedChat.avatar} />
                  <Box ml={1} minWidth={0}>
                    <Typography
                      fontWeight={600}
                      noWrap
                      title={selectedChat.name}
                      sx={{ maxWidth: 200 }}
                    >
                      {selectedChat.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color={selectedChat.online ? "green" : "gray"}
                      noWrap
                    >
                      {selectedChat.online ? "Online" : "Offline"}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton>
                    <PhoneIcon />
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* Messages */}
              <Box
                flex={1}
                p={2}
                overflow="auto"
                display="flex"
                flexDirection="column"
                sx={{ bgcolor: "#fff", flexGrow: 1 }}
              >
                <Typography
                  variant="caption"
                  alignSelf="center"
                  color="textSecondary"
                  mb={1}
                >
                  {selectedChat.date}
                </Typography>

                {selectedChat.messages.map((msg, i) => (
                  <Box
                    key={i}
                    display="flex"
                    alignItems="flex-end"
                    alignSelf={msg.from === "me" ? "flex-end" : "flex-start"}
                    mb={1}
                    maxWidth="75%"
                    sx={{ wordBreak: "break-word" }}
                  >
                    {msg.from !== "me" && (
                      <Avatar
                        src={selectedChat.avatar}
                        sx={{ width: 24, height: 24, mr: 1 }}
                      />
                    )}
                    <Box
                      bgcolor="#f1f1f1"
                      p={1.2}
                      borderRadius={2}
                      sx={{ flexShrink: 1 }}
                    >
                      <Typography variant="body2">{msg.text}</Typography>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        display="block"
                        textAlign="right"
                      >
                        {msg.time}
                      </Typography>
                    </Box>
                    {msg.from === "me" && (
                      <Avatar
                        src="https://i.pravatar.cc/150?img=1"
                        sx={{ width: 24, height: 24, ml: 1 }}
                      />
                    )}
                  </Box>
                ))}
              </Box>

              {/* Input */}
              <Box
                display="flex"
                alignItems="center"
                p={1}
                bgcolor="#f8f8f8"
                borderTop="1px solid #ddd"
                flexShrink={0}
              >
                <TextField
                  fullWidth
                  placeholder="Type here..."
                  variant="standard"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  InputProps={{ disableUnderline: true }}
                  sx={{ bgcolor: "#fff", borderRadius: 2, px: 2, py: 1 }}
                />
                <IconButton
                  sx={{
                    bgcolor: "#ffb300",
                    color: "#fff",
                    ml: 1,
                    "&:hover": { bgcolor: "#ffa000" },
                  }}
                  onClick={handleSend}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box
              flex={1}
              p={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ flexDirection: "column" }}
            >
              <Paper
                sx={{
                  p: 3,
                  width: "100%",
                  maxWidth: 500,
                  maxHeight: 260,
                  border: "1px solid #eee",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  src={selectedRequest.avatar}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6" fontWeight={600}>
                  {selectedRequest.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {selectedRequest.age} yrs | {selectedRequest.dob}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {selectedRequest.language}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {selectedRequest.profession}
                </Typography>
                <Chip
                  label={selectedRequest.status}
                  size="small"
                  sx={{
                    bgcolor: "#fff8e1",
                    color: "#ffb300",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                  }}
                />
                <Box display="flex" gap={2} mt={1}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#2196f3", cursor: "pointer", fontWeight: 500 }}
                  >
                    View Profile
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#2196f3", cursor: "pointer", fontWeight: 500 }}
                  >
                    More Actions
                  </Typography>
                </Box>
              </Paper>
            </Box>
          )}
        </Box>
      );
    }
  }

  // Desktop / Tablet Layout - side by side
  return (
    <Box
      sx={{
       
        display: "flex",
        maxWidth: 900,
       
        height: 560,
        marginTop:'70px',
        marginRight:'auto',
        marginLeft:'auto',
        bgcolor: "#fff",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 2,
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          flexBasis: "35%",
          borderRight: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          sx={{ bgcolor: "#fff" }}
        >
          <Tab label="My Interests" />
          <Tab label="Request" />
        </Tabs>

        <Box
          sx={{ flexGrow: 1, overflowY: "auto", bgcolor: "#fff" }}
          aria-label="Chat or Request list"
        >
          {tabIndex === 0
            ? chats.map((chat, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  px={2}
                  py={1.5}
                  borderBottom="1px solid #f0f0f0"
                  sx={{
                    cursor: "pointer",
                    bgcolor: index === selectedChatIndex ? "#f0f8ff" : "inherit",
                  }}
                  onClick={() => handleChatClick(index)}
                >
                  <Badge
                    color="error"
                    variant="dot"
                    invisible={!chat.unread}
                    overlap="circular"
                  >
                    <Avatar src={chat.avatar} />
                  </Badge>
                  <Box ml={2} flex={1} minWidth={0}>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      title={chat.name}
                      sx={{ fontWeight: "600" }}
                    >
                      {chat.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      noWrap
                      title={chat.message}
                    >
                      {chat.message}
                    </Typography>
                  </Box>
                </Box>
              ))
            : requests.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  px={2}
                  py={1.5}
                  borderBottom="1px solid #f0f0f0"
                  sx={{
                    cursor: "pointer",
                    bgcolor: index === selectedRequestIndex ? "#f0f8ff" : "inherit",
                  }}
                  onClick={() => handleRequestClick(index)}
                >
                  <Avatar src={item.avatar} />
                  <Box ml={2} flex={1} minWidth={0}>
                    <Typography variant="subtitle2" noWrap title={item.name}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      noWrap
                      title={item.status}
                    >
                      {item.status}
                    </Typography>
                  </Box>
                </Box>
              ))}
        </Box>
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#fff",
        }}
      >
        {tabIndex === 0 ? (
          <>
            {/* Chat Header */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px={2}
              py={1}
              borderBottom="1px solid #ddd"
              bgcolor="#fff"
              flexShrink={0}
            >
              <Box display="flex" alignItems="center" minWidth={0}>
                <Avatar src={selectedChat.avatar} />
                <Box ml={1} minWidth={0}>
                  <Typography
                    fontWeight={600}
                    noWrap
                    title={selectedChat.name}
                    sx={{ maxWidth: 200 }}
                  >
                    {selectedChat.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={selectedChat.online ? "green" : "gray"}
                    noWrap
                  >
                    {selectedChat.online ? "Online" : "Offline"}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton>
                  <PhoneIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </Box>  

            {/* Messages */}
            <Box
              flex={1}
              p={2}
              overflow="auto"
              display="flex"
              flexDirection="column"
              sx={{ bgcolor: "#fff", flexGrow: 1 }}
            >
              <Typography
                variant="caption"
                alignSelf="center"
                color="textSecondary"
                mb={1}
              >
                {selectedChat.date}
              </Typography>

              {selectedChat.messages.map((msg, i) => (
                <Box
                  key={i}
                  display="flex"
                  alignItems="flex-end"
                  alignSelf={msg.from === "me" ? "flex-end" : "flex-start"}
                  mb={1}
                  maxWidth="75%"
                  sx={{ wordBreak: "break-word" }}
                >
                  {msg.from !== "me" && (
                    <Avatar
                      src={selectedChat.avatar}
                      sx={{ width: 24, height: 24, mr: 1 }}
                    />
                  )}
                  <Box
                    bgcolor="#f1f1f1"
                    p={1.2}
                    borderRadius={2}
                    sx={{ flexShrink: 1 }}
                  >
                    <Typography variant="body2">{msg.text}</Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      display="block"
                      textAlign="right"
                    >
                      {msg.time}
                    </Typography>
                  </Box>
                  {msg.from === "me" && (
                    <Avatar
                      src="https://i.pravatar.cc/150?img=1"
                      sx={{ width: 24, height: 24, ml: 1 }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* Input */}
            <Box
              display="flex"
              alignItems="center"
              p={1}
              bgcolor="#f8f8f8"
              borderTop="1px solid #ddd"
              flexShrink={0}
            >
              <TextField
                fullWidth
                placeholder="Type here..."
                variant="standard"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                InputProps={{ disableUnderline: true }}
                sx={{ bgcolor: "#fff", borderRadius: 2, px: 2, py: 1 }}
              />
              <IconButton
                sx={{
                  bgcolor: "#ffb300",
                  color: "#fff",
                  ml: 1,
                  "&:hover": { bgcolor: "#ffa000" },
                }}
                onClick={handleSend}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </>
        ) : (
          <Box
            p={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ flexDirection: "column" }}
          >
            <Paper
              sx={{
                p: 3,
                width: "100%",
                maxWidth: 500,
                maxHeight: 280,
                border: "1px solid #eee",
                borderRadius: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Avatar
                src={selectedRequest.avatar}
                sx={{ width: 100, height: 100 }}
              />
              <Box>
                <Typography variant="h6" fontWeight={600}>
                {selectedRequest.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="left">
                {selectedRequest.age} yrs | {selectedRequest.dob}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="left">
                {selectedRequest.language}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="left">
                {selectedRequest.profession}
              </Typography>
              <Chip
                label={selectedRequest.status}  
                size="small"
                sx={{
                  bgcolor: "#fff8e1",
                  mt:1,
                  color: "#ffb300",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                }}
              />
              </Box>
              
              
              <Box display="flex" flexDirection={'column'} gap={2} mt={1}>
                <Typography
                  variant="body2"
                  sx={{ color: "#2196f3", cursor: "pointer", fontWeight: 500 }}
                >
                  View Profile
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#2196f3", cursor: "pointer", fontWeight: 500 }}
                >
                  More Actions
                </Typography>
              </Box>
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
}
