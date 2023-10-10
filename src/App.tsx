import { useState } from 'react'
import './App.css'
import { ExpenseList } from './components/ExpenseList'
import { ExpenseFilter } from './components/ExpenseFilter'
import { ExpenseForm } from './components/ExpenseForm'


function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Biscuit', amount: 10, category: 'Utilies' },
    { id: 2, description: 'Peanut', amount: 200, category: 'Groceries' },
    { id: 3, description: 'Chocolate', amount: 400, category: 'Entertainment' },
  ])

  const visibleExpenses = selectedCategory ? expenses
    .filter((e) => e.category === selectedCategory) : expenses

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={(data) =>
          setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
        } />
      </div>

      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) =>
          setSelectedCategory(category)} />
      </div>

      <ExpenseList expenses={visibleExpenses} onDelete={(id) =>
        setExpenses(expenses.filter((e) => e.id !== id))} />
    </>
  )
}

export default App
