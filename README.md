##English

Set up your own React project with vite e.g. :heads-down: (delete all files you don't need) and use scss as well
create own components for the header and footer, which are embedded in App.jsx
create another component, named AccountCheck, which is also embedded in App.jsx
           -in this component you create a variable called balance.
          -assign a value to the variable (either a positive value or a negative value)
          -inserts conditional rendering, depending on whether the value is positive or negative, money is still paid out or not
                       e.g.
                      <p>account balance is xxx . A payout is possible</p>
                      <p>Account balance is xxx . No more payout is possible</p>
          -also add some inline styling for the visual representation of your text
          -now create an array (name transactions) with single objects in which the last income/expenses are stored. e.g. [ { where: "Gas station", value: -25.00}]
          -use map to show all account transactions as a list (all expenses in red, all income in green - add classes for the visual representation depending on the condition)

BONUS :muscle: try to swap your data (array with bank transactions and the variable balance into App.jsx and then pass it as props into the component AccountCheck 


<hr>
## Deutsch
Setzt auch mal ein eigenes React Projekt auf mit vite z.b.  :heads-down:  (löscht alle Dateien, welche ihr nicht benötigt) und nutzt am besten auch scss
erstellt jeweils eigene components für den Header und Footer, welche in App.jsx eingebettet sind
erstellt eine weitere component, mit dem Namen AccountCheck, welche auch in App.jsx eingebettet wird
           -in dieser component legt ihr eine variable namens balance (Kontostand) an.
          -weißt der variable einen Wert zu (entweder ein positiver Wert oder ein negativer Wert)
          -fügt conditional rendering ein, je nachdem ob der Wert positiv oder negativ ist, wird noch Geld ausgezahlt oder nicht
                       z.b.
                      <p>Kontostand ist xxx . Eine Auszahlung ist möglich</p>
                      <p>Kontostand ist xxx . Es ist keine Auszahlung mehr möglich</p>
          -füge auch noch ein wenig inline styling hinzu für die visuelle Darstellung deines Textes
          -nun lege noch ein array (name transactions) mit einzelnen objekten an in welchem die  letzten Einnahmen/ Ausgaben gespeichern sind. z.b. [ { where: "Tankstelle", value: -25.00}]
          -nutze map um alle Kontobewegungen als Liste anzuzeigen (alle Ausgaben in rot, alle Einnahmen in grün - füge für die visuelle Darstellung Klassen je nach condition hinzu)

BONUS :muskel: versuche deine Daten (array mit Bankbewegungen und die variable balance in die App.jsx auszulagern und dann als props in die component AccountCheck durchzureichen