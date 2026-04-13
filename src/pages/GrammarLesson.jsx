import { isLessonComplete } from '../data/progress';

export default function GrammarLesson({ lesson, navigate }) {
  if (!lesson) return null;
  const { theory, examples, id, title, arabicTitle, topic, quranCount } = lesson;
  const done = isLessonComplete(id);

  return (
    <div>
      {/* Header */}
      <div className="app-header">
        <button className="header-back" onClick={() => navigate('home')}>←</button>
        <div>
          <div className="header-title">Lesson {id}: {title}</div>
          <div className="header-subtitle">{topic}</div>
        </div>
        {done && <span style={{fontSize:'1.2rem'}}>✅</span>}
      </div>

      <div className="lesson-content">
        {/* Hero */}
        <div className="lesson-hero">
          <div className="lesson-hero-num">Grammar · Lesson {id}</div>
          <div className="lesson-hero-title">{topic}</div>
          <div className="lesson-hero-arabic">{arabicTitle}</div>
          {quranCount && (
            <div className="lesson-hero-count">
              📖 Occurs {quranCount} times in Qur'an
            </div>
          )}
        </div>

        {/* Theory */}
        {theory && (
          <div className="card">
            <div className="card-title">📚 Grammar Theory</div>
            {theory.intro && (
              <div className="theory-intro">{theory.intro}</div>
            )}
            {theory.points && theory.points.length > 0 && (
              <ul className="theory-points">
                {theory.points.map((p, i) => (
                  <li key={i} className="theory-point">
                    <span className="theory-point-dot" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Main Table */}
        {theory?.table && (
          <div className="card">
            <div className="card-title">📋 Main Words</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Arabic</th>
                    <th>English</th>
                    {theory.table[0]?.count !== undefined && <th>Count</th>}
                    {theory.table[0]?.definite !== undefined && <th>Definite (الـ)</th>}
                  </tr>
                </thead>
                <tbody>
                  {theory.table.map((row, i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.arabic || row.singular}</td>
                      <td>{row.english || row.singular_en}</td>
                      {row.count !== undefined && <td className="count-cell">{row.count}×</td>}
                      {row.definite !== undefined && (
                        <td className="arabic-cell">{row.definite}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Plurals */}
        {theory?.plurals && (
          <div className="card">
            <div className="card-title">📋 Plurals</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Singular</th>
                    <th>Plural (ون)</th>
                    <th>Plural (ين)</th>
                  </tr>
                </thead>
                <tbody>
                  {theory.plurals.map((row, i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.singular}</td>
                      <td className="arabic-cell">{row.plural1}</td>
                      <td className="arabic-cell">{row.plural2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Feminine Table */}
        {theory?.femTable && (
          <div className="card">
            <div className="card-title">📋 Feminine Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Masculine</th>
                    <th>Feminine (ة)</th>
                    <th>Plural (ات)</th>
                  </tr>
                </thead>
                <tbody>
                  {theory.femTable.map((row, i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.masculine}</td>
                      <td className="arabic-cell">{row.feminine}</td>
                      <td className="arabic-cell">{row.plural}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Her forms */}
        {theory?.herForms && (
          <div className="card">
            <div className="card-title">📋 Her Forms (هَا)</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Arabic</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {theory.herForms.map((row, i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Suffix Table */}
        {theory?.table && theory.table[0]?.suffix && (
          <div className="card">
            <div className="card-title">📋 Possessive Suffixes with رَبّ</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Suffix</th>
                    <th>Meaning</th>
                    <th>With رَبّ</th>
                    <th>Translation</th>
                  </tr>
                </thead>
                <tbody>
                  {theory.table.map((row, i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.suffix}</td>
                      <td>{row.meaning}</td>
                      <td className="arabic-cell">{row.example}</td>
                      <td>{row.example_en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Extra forms */}
        {theory?.extra && (
          <div className="card">
            <div className="card-title">➕ Additional Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Arabic</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {theory.extra.map((row, i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.result || row.arabic}</td>
                      <td>{row.meaning || row.english}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* For/From/With tables */}
        {theory?.forTable && (
          <div className="card">
            <div className="card-title">📋 لِ (for) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.forTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.fromTable && (
          <div className="card">
            <div className="card-title">📋 مِنْ (from) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.fromTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bi / Fi / Ala tables */}
        {theory?.biTable && (
          <div className="card">
            <div className="card-title">📋 بِ (in/with) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.biTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.fiTable && (
          <div className="card">
            <div className="card-title">📋 فِي (in) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.fiTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.alaTable && (
          <div className="card">
            <div className="card-title">📋 عَلَى (on) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.alaTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Ila / Ma / Inda tables */}
        {theory?.ilaTable && (
          <div className="card">
            <div className="card-title">📋 إِلَى (to) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.ilaTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.maTable && (
          <div className="card">
            <div className="card-title">📋 مَعَ (with) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.maTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.indaTable && (
          <div className="card">
            <div className="card-title">📋 عِنْدَ (near/have) — Forms</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Arabic</th><th>Meaning</th></tr></thead>
                <tbody>
                  {theory.indaTable.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.form}</td>
                      <td>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Conjugation */}
        {theory?.conjugation && (
          <div className="card">
            <div className="card-title">📋 Verb Conjugation</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Person</th><th>Arabic</th></tr></thead>
                <tbody>
                  {theory.conjugation.map((row,i) => (
                    <tr key={i}>
                      <td>{row.person}</td>
                      <td className="arabic-cell">{row.arabic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Verb 2 */}
        {theory?.verb2 && (
          <div className="card">
            <div className="card-title">📋 Second Verb Pattern</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Person</th><th>Arabic</th></tr></thead>
                <tbody>
                  {theory.verb2.map((row,i) => (
                    <tr key={i}>
                      <td>{row.person}</td>
                      <td className="arabic-cell">{row.arabic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Imperative / command tables */}
        {theory?.imperativeTable && (
          <div className="card">
            <div className="card-title">📋 Commands & Prohibitions</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Command</th><th>Arabic</th></tr></thead>
                <tbody>
                  {theory.imperativeTable.map((row,i) => (
                    <tr key={i}>
                      <td>{row.command}</td>
                      <td className="arabic-cell">{row.arabic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.table && theory.table[0]?.command && (
          <div className="card">
            <div className="card-title">📋 Commands & Prohibitions</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Command</th><th>Arabic</th></tr></thead>
                <tbody>
                  {theory.table.map((row,i) => (
                    <tr key={i}>
                      <td>{row.command}</td>
                      <td className="arabic-cell">{row.arabic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Sarf Summary */}
        {theory?.summaryTable && (
          <div className="card">
            <div className="card-title">📋 Sarf-e-Sagheer Summary</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead><tr><th>Form</th><th>Arabic</th><th>Category</th></tr></thead>
                <tbody>
                  {theory.summaryTable.map((row,i) => (
                    <tr key={i}>
                      <td>{row.label}</td>
                      <td className="arabic-cell">{row.form}</td>
                      <td className="arabic-cell" style={{fontSize:'0.9rem'}}>{row.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.verbs && (
          <div className="card">
            <div className="card-title">📋 Verb Summary Table</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Past</th>
                    <th>Present</th>
                    <th>Command</th>
                    <th>Doer</th>
                    <th>Passive</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {theory.verbs.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.past}</td>
                      <td className="arabic-cell">{row.present}</td>
                      <td className="arabic-cell">{row.command}</td>
                      <td className="arabic-cell">{row.faeil}</td>
                      <td className="arabic-cell">{row.mafool}</td>
                      <td className="arabic-cell">{row.masdar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {theory?.table && theory.table[0]?.verb && (
          <div className="card">
            <div className="card-title">📋 Active & Passive Participles</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Verb</th>
                    <th>Doer (فاعل)</th>
                    <th>Passive (مفعول)</th>
                    <th>Action (مصدر)</th>
                  </tr>
                </thead>
                <tbody>
                  {theory.table.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.verb}</td>
                      <td className="arabic-cell">{row.faeil}</td>
                      <td className="arabic-cell">{row.mafool}</td>
                      <td className="arabic-cell">{row.masdar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Demonstratives table */}
        {theory?.table && theory.table[0]?.arabic && !theory.table[0]?.suffix && !theory.table[0]?.verb && !theory.table[0]?.command && !theory.table[0]?.singular && (
          <div className="card">
            <div className="card-title">📋 Word List</div>
            <div style={{overflowX:'auto'}}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Arabic</th>
                    <th>English</th>
                    {theory.table[0]?.count !== undefined && <th>Count</th>}
                  </tr>
                </thead>
                <tbody>
                  {theory.table.map((row,i) => (
                    <tr key={i}>
                      <td className="arabic-cell">{row.arabic}</td>
                      <td>{row.english}</td>
                      {row.count !== undefined && <td className="count-cell">{row.count}×</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Examples */}
        {examples && examples.length > 0 && (
          <div className="card">
            <div className="card-title">💬 Example Sentences</div>
            <div className="examples-list">
              {examples.map((ex, i) => (
                <div key={i} className="example-item">
                  <div className="example-arabic">{ex.arabic}</div>
                  <div className="example-english">{ex.english}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practice Button */}
        <button
          className="practice-btn"
          onClick={() => navigate('grammar-exercise', lesson)}
          style={{marginTop: 20}}
        >
          ✏️ Start Exercises ({lesson.exercises?.length || 0} questions)
        </button>

        <div style={{height: 20}} />
      </div>
    </div>
  );
}
