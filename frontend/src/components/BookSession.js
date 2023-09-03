import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookSession = () => {
  const navigate = useNavigate();

  const [nutritionists] = useState([
    "Doctor Tang Mong",
    "Doctor Wilson Moore",
    "Doctor Wale Seyi",
  ]);

  const [selectedNutritionist, setSelectedNutritionist] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (selectedNutritionist) {
      const dates = [
        new Date(),
        new Date(new Date().setDate(new Date().getDate() + 2)),
        new Date(new Date().setDate(new Date().getDate() + 4)),
      ];
      setAvailableDates(dates);
    } else {
      setAvailableDates([]);
    }
  }, [selectedNutritionist]);

  const handleBook = async () => {
    if (selectedNutritionist && selectedDate) {
      try {
        const response = await axios.post("/book-appointment", {
          nutritionist: selectedNutritionist,
          date: selectedDate,
          userId: "user._id",
        });

        if (response.status === 201) {
          console.log("Booking saved successfully");
          navigate("/confirmation");
        }
      } catch (error) {
        console.error("Failed to save the booking:", error.message);
      }
    }
  };

  return (
    <Container>
      <Header>Book a Consultation</Header>

      <label>Select a Nutritionist:</label>
      <StyledSelect
        value={selectedNutritionist}
        onChange={(e) => setSelectedNutritionist(e.target.value)}
      >
        <option value="" disabled>
          Select nutritionist
        </option>
        {nutritionists.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </StyledSelect>

      {selectedNutritionist && (
        <>
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            includeDates={availableDates}
            minDate={new Date()}
          />
        </>
      )}

      <StyledButton
        onClick={handleBook}
        disabled={!selectedNutritionist || !selectedDate}
      >
        Book
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  max-width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default BookSession;
