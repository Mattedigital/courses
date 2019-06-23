import React from 'react';
import ShortId from 'shortid';

const ArrayCardio01 = () => {
  const inventors = [
    {
      first: 'Albert', last: 'Einstein', year: 1879, passed: 1955,
    },
    {
      first: 'Isaac', last: 'Newton', year: 1643, passed: 1727,
    },
    {
      first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642,
    },
    {
      first: 'Marie', last: 'Curie', year: 1867, passed: 1934,
    },
    {
      first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630,
    },
    {
      first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543,
    },
    {
      first: 'Max', last: 'Planck', year: 1858, passed: 1947,
    },
    {
      first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979,
    },
    {
      first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852,
    },
    {
      first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905,
    },
    {
      first: 'Lise', last: 'Meitner', year: 1878, passed: 1968,
    },
    {
      first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909,
    },
  ];
  // functions for inventors array
  const fifteens = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  const byBirth = inventors.sort((a, b) => a.year - b.year);
  const sumAllLives = inventors.reduce((acc, currVal) => acc + (currVal.passed - currVal.year), 0);
  const byYearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
  // functions for people array
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  const byName = people.sort((a, b) => a > b);
  const print = object => object.map((item) => {
    const x = (
      <li className="inventorDetails" key={ShortId.generate()}>
        <span>{item.first} {item.last}</span>
        <span>Born: {item.year}</span>
        <span>Died: {item.passed}</span>
        <span>Yrs Lived: {item.passed - item.year}</span>
      </li>
    );
    return <ol>{x}</ol>;
  });
  return (
    <div className="container">
      {people[0]}
      <section className="arrayCardioSection">
        <h4>Inventors Born in 1500&apos;s</h4>
        {print(fifteens)}
      </section>
      <section className="arrayCardioSection">
        <h4>Inventors first &amp; last names</h4>
        {print(inventors)}
      </section>
      <section className="arrayCardioSection">
        <h4>Inventors in order of birth</h4>
        {print(byBirth)}
      </section>
      <section className="arrayCardioSection">
        <h4>Sum of Years inventors lived</h4>
        {sumAllLives}
      </section>
      <section className="arrayCardioSection">
        <h4>Inventors in order of years lived</h4>
        {print(byYearsLived)}
      </section>
      <section className="arrayCardioSection">
        <h4>Sort people alphabetically</h4>
        <ol>
          {byName.map(x => <li>{x}</li>)}
        </ol>
      </section>
    </div>
  );
};

export default ArrayCardio01;
