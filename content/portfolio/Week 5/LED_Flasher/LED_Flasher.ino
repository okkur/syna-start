// These variables store the flash pattern
// and the current state of the LED

int ledPin1 =  12;      // the number of the LED pin
int ledState1 = LOW;             // ledState used to set the LED
unsigned long previousMillis1 = 0;        // will store last time LED was updated
long OnTime1 = 250;           // milliseconds of on-time
long OffTime1 = 750;          // milliseconds of off-time

int ledPin2 =  13;      // the number of the LED pin
int ledState2 = LOW;             // ledState used to set the LED
unsigned long previousMillis2 = 0;        // will store last time LED was updated
long OnTime2 = 330;           // milliseconds of on-time
long OffTime2 = 400;          // milliseconds of off-time

void setup() 
{
  // set the digital pin as output:
  pinMode(ledPin1, OUTPUT);      
  pinMode(ledPin2, OUTPUT);      
}

void loop()
{
  // check to see if it's time to change the state of the LED
  unsigned long currentMillis = millis();
 
  if((ledState1 == HIGH) && (currentMillis - previousMillis1 >= OnTime1))
  {
    ledState1 = LOW;  // Turn it off
    previousMillis1 = currentMillis;  // Remember the time
    digitalWrite(ledPin1, ledState1);  // Update the actual LED
  }
  else if ((ledState1 == LOW) && (currentMillis - previousMillis1 >= OffTime1))
  {
    ledState1 = HIGH;  // turn it on
    previousMillis1 = currentMillis;   // Remember the time
    digitalWrite(ledPin1, ledState1);	  // Update the actual LED
  }
  
  if((ledState2 == HIGH) && (currentMillis - previousMillis2 >= OnTime2))
  {
    ledState2 = LOW;  // Turn it off
    previousMillis2 = currentMillis;  // Remember the time
    digitalWrite(ledPin2, ledState2);  // Update the actual LED
  }
  else if ((ledState2 == LOW) && (currentMillis - previousMillis2 >= OffTime2))
  {
    ledState2 = HIGH;  // turn it on
    previousMillis2 = currentMillis;   // Remember the time
    digitalWrite(ledPin2, ledState2);	  // Update the actual LED
  }
}