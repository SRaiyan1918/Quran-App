const catLabel = (cat) => {
  const map = {
    intro: 'Introduction', makharij: 'Makharij', sifaat: 'Sifaat',
    madd: 'Madd', noon_rules: 'Noon Rules', meem_rules: 'Meem Rules',
    waqf: 'Waqf', special: 'Special', ghunnah: 'Ghunnah',
    shaddah: 'Shaddah', tanween: 'Tanween', lam_rules: 'Laam Rules',
    sukoon: 'Sukoon', review: 'Review'
  };
  return map[cat] || cat;
};

// Letter photo placeholder block
// NEW (Add this)
function LetterPlaceholder({ letter, name, image }) {
  const imagePath = `/images/makharij/${image}`;
  
  return (
    <div style={{
      background: 'var(--cream-dark)',
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 14,
    }}>
      <img 
        src={imagePath}
        alt={`Makhraj of ${name} (${letter})`}
        style={{
          width: '100%',
          maxHeight: '200px',
          objectFit: 'cover',
          display: 'block'
        }}
        onError={(e) => {
          // Agar image nahi mili to fallback dikhao
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="letter-placeholder" style={{display: 'none'}}>
        <div className="placeholder-letter">{letter}</div>
        <div className="placeholder-hint">📷 Image not found: {image}</div>
      </div>
    </div>
  );
}

// Makharij lesson renderer
function MakhrajContent({ lesson }) {
  return (
    <>
      {lesson.letters.map((letter, i) => (
        <div key={i} style={{margin: '12px 16px 0'}}>
          <div style={{
            background: 'white',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
          }}>
            {/* Letter header */}
            <div style={{
              background: 'linear-gradient(135deg, var(--green-dark), var(--green-mid))',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}>
              <div style={{
                fontFamily: "'Lateef', 'Amiri', serif",
                fontSize: '2.8rem',
                color: 'white',
                direction: 'rtl',
                fontWeight: 700,
                lineHeight: 1,
                minWidth: 48,
                textAlign: 'center',
              }}>{letter.letter}</div>
              <div>
                <div style={{color:'white', fontWeight:800, fontSize:'1rem'}}>{letter.name}</div>
                {lesson.letters.length === 1 && (
                  <div style={{color:'rgba(255,255,255,0.65)', fontSize:'0.75rem'}}>
                    Lesson {lesson.id}
                  </div>
                )}
              </div>
            </div>

            <div style={{padding: '16px 18px'}}>
              {/* Photo placeholder */}
              // NEW
              {letter.image && (
  <div style={{marginBottom: 14}}>
    <div style={{
      fontSize: '0.7rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: 'var(--green-dark)',
      marginBottom: 6,
    }}>Makhraj Diagram</div>
    <LetterPlaceholder 
      letter={letter.letter} 
      name={letter.name} 
      image={letter.image} 
    />
  </div>
)}
              {/* Makhraj rule */}
              <div style={{marginBottom: 10}}>
                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'var(--green-dark)',
                  marginBottom: 6,
                }}>Makhraj (Articulation)</div>
                <div style={{
                  background: 'var(--green-ultra)',
                  borderLeft: '3px solid var(--green-main)',
                  borderRadius: 8,
                  padding: '12px 14px',
                  fontSize: '0.9rem',
                  color: 'var(--text-dark)',
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}>{letter.makhraj}</div>
              </div>

              {/* Common mistakes */}
              {(letter.commonMistake || letter.commonMistakes) && (
                <div style={{
                  background: '#fff3cd',
                  borderRadius: 8,
                  padding: '12px 14px',
                  marginTop: 8,
                }}>
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: '#856404',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>⚠️ Common Mistakes</div>
                  {letter.commonMistake && (
                    <div style={{fontSize:'0.85rem', color:'#856404', lineHeight:1.6}}>
                      {letter.commonMistake}
                    </div>
                  )}
                  {letter.commonMistakes && letter.commonMistakes.map((m, mi) => (
                    <div key={mi} style={{
                      fontSize:'0.85rem', color:'#856404', lineHeight:1.6,
                      display:'flex', gap:8,
                    }}>
                      <span>•</span><span>{m}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tip */}
              {letter.tip && (
                <div style={{
                  background: 'var(--cream)',
                  borderRadius: 8,
                  padding: '10px 14px',
                  marginTop: 8,
                  fontSize: '0.82rem',
                  color: 'var(--text-light)',
                  fontStyle: 'italic',
                }}>💡 {letter.tip}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// Generic info renderer
function InfoContent({ lesson }) {
  const { content } = lesson;
  if (!content) return null;

  return (
    <>
      {/* Definition / main rule */}
      {content.definition && (
        <div className="card">
          <div className="card-title">📖 Definition</div>
          <div className="theory-intro">{content.definition}</div>
        </div>
      )}

      {/* Rule */}
      {content.rule && (
        <div className="card">
          <div className="card-title">📌 Rule</div>
          <div className="theory-intro">{content.rule}</div>
          {content.symbol && (
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'var(--green-pale)', padding:'8px 16px',
              borderRadius:20, marginTop:10,
              fontFamily:"'Lateef','Amiri',serif", fontSize:'1.6rem',
              direction:'rtl', color:'var(--green-dark)', fontWeight:700,
            }}>Symbol: {content.symbol}</div>
          )}
        </div>
      )}

      {/* Importance */}
      {content.importance && (
        <div className="card">
          <div className="card-title">⭐ Importance</div>
          <div style={{fontSize:'0.88rem', color:'var(--text-dark)', lineHeight:1.7}}>
            {content.importance}
          </div>
        </div>
      )}

      {/* Hadith */}
      {content.hadith && (
        <div className="card">
          <div className="card-title">📜 Hadith</div>
          <div style={{
            background:'var(--green-ultra)',
            borderRadius:10,
            padding:'14px 16px',
            marginBottom:10,
            textAlign:'right',
          }}>
            <div style={{
              fontFamily:"'Lateef','Amiri',serif",
              fontSize:'1.4rem',
              direction:'rtl',
              color:'var(--green-dark)',
              fontWeight:700,
              lineHeight:2,
            }}>{content.hadith.arabic}</div>
          </div>
          <div style={{
            fontSize:'0.88rem',
            color:'var(--text-dark)',
            lineHeight:1.6,
            fontStyle:'italic',
            marginBottom:6,
          }}>"{content.hadith.english}"</div>
          <div style={{fontSize:'0.75rem', color:'var(--text-muted)', fontWeight:700}}>
            — {content.hadith.source}
          </div>
        </div>
      )}

      {/* Three components */}
      {content.threeComponents && (
        <div className="card">
          <div className="card-title">🏛️ Three Components of Tajweed</div>
          <div style={{display:'flex', flexDirection:'column', gap:10, marginTop:4}}>
            {content.threeComponents.map((c, i) => (
              <div key={i} style={{
                background:'white',
                border:'1.5px solid var(--green-pale)',
                borderRadius:12,
                padding:'14px 16px',
                display:'flex', gap:12, alignItems:'flex-start',
              }}>
                <div style={{
                  background:'var(--green-main)',
                  color:'white',
                  borderRadius:8,
                  width:36, height:36,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.75rem', fontWeight:900,
                  flexShrink:0,
                }}>0{i+1}</div>
                <div>
                  <div style={{
                    fontFamily:"'Lateef','Amiri',serif",
                    fontSize:'1.3rem',
                    direction:'rtl',
                    color:'var(--green-dark)',
                    fontWeight:700,
                  }}>{c.arabic}</div>
                  <div style={{fontWeight:800, fontSize:'0.9rem', color:'var(--text-dark)'}}>
                    {c.english}
                  </div>
                  <div style={{fontSize:'0.8rem', color:'var(--text-light)', marginTop:2}}>
                    {c.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Why mistakes */}
      {content.whyMistakes && (
        <div className="card">
          <div className="card-title">🚫 Why We Make Mistakes</div>
          <ul className="theory-points">
            {content.whyMistakes.map((p, i) => (
              <li key={i} className="theory-point">
                <span className="theory-point-dot" />
                <span style={{fontSize:'0.88rem'}}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Categories */}
      {content.categories && (
        <div className="card">
          <div className="card-title">📊 Categories</div>
          <div style={{display:'flex', flexDirection:'column', gap:8}}>
            {content.categories.map((cat, i) => (
              <div key={i} style={{
                background:'var(--cream)',
                border:'1px solid var(--cream-dark)',
                borderRadius:10,
                padding:'12px 14px',
              }}>
                <div style={{
                  fontWeight:800, fontSize:'0.88rem',
                  color:'var(--green-dark)', marginBottom:4,
                }}>{cat.label}</div>
                <div style={{fontSize:'0.82rem', color:'var(--text-light)', lineHeight:1.5}}>
                  {cat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Groups (letter groups) */}
      {content.groups && (
        <div className="card">
          <div className="card-title">🔡 Letter Groups</div>
          {content.groups.map((g, i) => (
            <div key={i} style={{marginBottom:14}}>
              <div style={{
                fontSize:'0.78rem', fontWeight:800,
                color:'var(--text-light)', marginBottom:8,
                textTransform:'uppercase', letterSpacing:'0.5px',
              }}>{g.label}</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                {g.letters.map((l, li) => (
                  <div key={li} style={{
                    fontFamily:"'Lateef','Amiri',serif",
                    fontSize:'1.5rem',
                    direction:'rtl',
                    background:'var(--green-pale)',
                    color:'var(--green-dark)',
                    width:46, height:46,
                    borderRadius:10,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontWeight:700,
                  }}>{l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sifaat summary */}
      {content.sifaat && (
        <div className="card">
          <div className="card-title">📊 Sifaat Summary</div>
          {Object.entries(content.sifaat).map(([k, v]) => (
            <div key={k} style={{
              background:'var(--cream)',
              borderRadius:8,
              padding:'10px 14px',
              marginBottom:8,
              fontSize:'0.85rem',
              color:'var(--text-dark)',
              lineHeight:1.6,
            }}>{v}</div>
          ))}
        </div>
      )}

      {/* Examples */}
      {content.examples && (
        <div className="card">
          <div className="card-title">💬 Examples</div>
          <div style={{display:'flex', flexWrap:'wrap', gap:10}}>
            {content.examples.map((ex, i) => (
              <div key={i} style={{
                fontFamily:"'Lateef','Amiri',serif",
                fontSize:'1.4rem',
                direction:'rtl',
                background:'var(--green-ultra)',
                color:'var(--green-dark)',
                padding:'8px 16px',
                borderRadius:10,
                fontWeight:600,
              }}>{ex}</div>
            ))}
          </div>
        </div>
      )}

      {/* English-like examples */}
      {content.english_like && (
        <div className="card">
          <div className="card-title">🇬🇧 English Comparison</div>
          <div style={{
            background:'#d1ecf1',
            borderRadius:10,
            padding:'12px 16px',
            fontSize:'0.88rem',
            color:'#0c5460',
            lineHeight:1.6,
            fontWeight:600,
          }}>💡 {content.english_like}</div>
        </div>
      )}

      {/* Note */}
      {content.note && (
        <div className="card">
          <div className="card-title">📝 Note</div>
          <div style={{
            fontSize:'0.88rem', color:'var(--text-dark)',
            lineHeight:1.7, background:'var(--cream)',
            borderRadius:10, padding:'12px 16px',
          }}>{content.note}</div>
        </div>
      )}

      {/* Letters grid */}
      {content.letters && (
        <div className="card">
          <div className="card-title">🔡 Letters</div>
          <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
            {content.letters.map((l, i) => (
              <div key={i} style={{
                fontFamily:"'Lateef','Amiri',serif",
                fontSize:'1.5rem',
                direction:'rtl',
                background:'var(--green-pale)',
                color:'var(--green-dark)',
                width:46, height:46,
                borderRadius:10,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontWeight:700,
              }}>{l}</div>
            ))}
          </div>
          {content.collection && (
            <div style={{
              marginTop:12,
              fontFamily:"'Lateef','Amiri',serif",
              fontSize:'1.6rem',
              direction:'rtl',
              textAlign:'center',
              color:'var(--green-dark)',
              background:'var(--green-ultra)',
              borderRadius:10,
              padding:'10px',
              fontWeight:700,
            }}>
              Memory: {content.collection}
            </div>
          )}
        </div>
      )}

      {/* Why */}
      {content.why && (
        <div className="card">
          <div className="card-title">❓ Why</div>
          <div style={{fontSize:'0.88rem', color:'var(--text-dark)', lineHeight:1.7}}>
            {content.why}
          </div>
        </div>
      )}

      {/* Extra sound */}
      {content.extra_sound && (
        <div className="card">
          <div className="card-title">🔊 Extra Sound</div>
          <div style={{fontSize:'0.88rem', color:'var(--text-dark)', lineHeight:1.7}}>
            {content.extra_sound}
          </div>
        </div>
      )}

      {/* Types */}
      {content.types && (
        <div className="card">
          <div className="card-title">📋 Types</div>
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            {content.types.map((t, i) => (
              <div key={i} style={{
                background:'var(--cream)',
                border:'1px solid var(--cream-dark)',
                borderRadius:10,
                padding:'12px 16px',
              }}>
                <div style={{fontWeight:800, fontSize:'0.88rem', color:'var(--green-dark)', marginBottom:4}}>
                  {t.name || t.label}
                </div>
                {t.symbol && (
                  <div style={{
                    fontFamily:"'Lateef','Amiri',serif",
                    fontSize:'1.4rem', direction:'rtl',
                    color:'var(--green-dark)', fontWeight:700,
                    marginBottom:4,
                  }}>{t.symbol}</div>
                )}
                {t.desc && (
                  <div style={{fontSize:'0.82rem', color:'var(--text-light)', lineHeight:1.5}}>
                    {t.desc}
                  </div>
                )}
                {t.like && (
                  <div style={{fontSize:'0.8rem', color:'var(--text-muted)', marginTop:4}}>
                    Like: {t.like}
                  </div>
                )}
                {t.stretch && (
                  <div style={{
                    marginTop:6,
                    display:'inline-flex',
                    background:'var(--green-pale)',
                    color:'var(--green-dark)',
                    fontSize:'0.75rem',
                    fontWeight:800,
                    padding:'3px 10px',
                    borderRadius:20,
                  }}>Stretch: {t.stretch}</div>
                )}
                {t.examples && (
                  <div style={{display:'flex', flexWrap:'wrap', gap:6, marginTop:8}}>
                    {t.examples.map((ex,ei) => (
                      <div key={ei} style={{
                        fontFamily:"'Lateef','Amiri',serif",
                        fontSize:'1.2rem', direction:'rtl',
                        background:'var(--green-ultra)',
                        color:'var(--green-dark)',
                        padding:'4px 12px',
                        borderRadius:8, fontWeight:600,
                      }}>{ex}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Madd Rules (rules array) */}
      {content.rules && (
        <div className="card">
          <div className="card-title">📌 Rules</div>
          <div style={{display:'flex', flexDirection:'column', gap:12}}>
            {content.rules.map((r, i) => (
              <div key={i} style={{
                background:'var(--cream)',
                border:'1px solid var(--cream-dark)',
                borderRadius:10,
                padding:'14px 16px',
              }}>
                {r.number && (
                  <div style={{
                    display:'inline-flex',
                    background:'var(--green-main)',
                    color:'white',
                    fontSize:'0.72rem',
                    fontWeight:900,
                    padding:'2px 10px',
                    borderRadius:20,
                    marginBottom:8,
                  }}>Rule {r.number}</div>
                )}
                {r.name && (
                  <div style={{fontWeight:800, fontSize:'0.9rem', color:'var(--green-dark)', marginBottom:6}}>
                    {r.name}
                  </div>
                )}
                {r.condition && (
                  <div style={{fontSize:'0.85rem', color:'var(--text-dark)', lineHeight:1.6, marginBottom:6}}>
                    {r.condition}
                  </div>
                )}
                {r.rule && (
                  <div style={{fontSize:'0.85rem', color:'var(--text-dark)', lineHeight:1.6, marginBottom:6}}>
                    {r.rule}
                  </div>
                )}
                {r.desc && (
                  <div style={{fontSize:'0.85rem', color:'var(--text-dark)', lineHeight:1.6, marginBottom:6}}>
                    {r.desc}
                  </div>
                )}
                {r.letters && (
                  <div style={{display:'flex', flexWrap:'wrap', gap:6, marginTop:6}}>
                    {r.letters.map((l,li) => (
                      <div key={li} style={{
                        fontFamily:"'Lateef','Amiri',serif",
                        fontSize:'1.3rem', direction:'rtl',
                        background:'var(--green-pale)',
                        color:'var(--green-dark)',
                        width:40, height:40,
                        borderRadius:8,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        fontWeight:700,
                      }}>{l}</div>
                    ))}
                  </div>
                )}
                {r.collection && (
                  <div style={{
                    marginTop:8,
                    fontFamily:"'Lateef','Amiri',serif",
                    fontSize:'1.4rem', direction:'rtl',
                    background:'var(--green-ultra)',
                    color:'var(--green-dark)',
                    padding:'8px 14px',
                    borderRadius:8, fontWeight:700,
                    display:'inline-block',
                  }}>Memory: {r.collection}</div>
                )}
                {r.examples && (
                  <div style={{display:'flex', flexWrap:'wrap', gap:6, marginTop:8}}>
                    {r.examples.map((ex,ei) => (
                      <div key={ei} style={{
                        fontFamily:"'Lateef','Amiri',serif",
                        fontSize:'1.1rem', direction:'rtl',
                        background:'var(--green-ultra)',
                        color:'var(--green-dark)',
                        padding:'4px 12px',
                        borderRadius:8, fontWeight:600,
                      }}>{ex}</div>
                    ))}
                  </div>
                )}
                {r.note && (
                  <div style={{
                    marginTop:8,
                    fontSize:'0.78rem', color:'var(--text-muted)',
                    background:'var(--cream)',
                    borderRadius:6,
                    padding:'8px 12px',
                    lineHeight:1.5,
                  }}>📝 {r.note}</div>
                )}
                {r.caution && (
                  <div style={{
                    marginTop:8,
                    fontSize:'0.78rem', color:'#856404',
                    background:'#fff3cd',
                    borderRadius:6,
                    padding:'8px 12px',
                    lineHeight:1.5,
                  }}>⚠️ {r.caution}</div>
                )}
                {r.words && (
                  <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:8}}>
                    {r.words.map((w,wi) => (
                      <div key={wi} style={{
                        fontFamily:"'Lateef','Amiri',serif",
                        fontSize:'1.3rem', direction:'rtl',
                        background:'#fce8e8',
                        color:'#c0392b',
                        padding:'6px 14px',
                        borderRadius:8, fontWeight:700,
                      }}>{w}</div>
                    ))}
                  </div>
                )}
                {r.sub && (
                  <ul style={{marginTop:8, paddingLeft:0, listStyle:'none'}}>
                    {r.sub.map((s,si) => (
                      <li key={si} style={{
                        fontSize:'0.82rem', color:'var(--text-mid)',
                        lineHeight:1.6, display:'flex', gap:8, marginBottom:4,
                      }}>
                        <span style={{color:'var(--green-main)', fontWeight:800}}>→</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      {content.summary && (
        <div className="card">
          <div className="card-title">📌 Summary</div>
          <div style={{fontSize:'0.88rem', color:'var(--text-dark)', lineHeight:1.7}}>
            {content.summary}
          </div>
          {content.summary.rules && (
            <ul className="theory-points" style={{marginTop:10}}>
              {content.summary.rules.map((r,i) => (
                <li key={i} className="theory-point">
                  <span className="theory-point-dot"/>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Stop signs table */}
      {content.signs && (
        <div className="card">
          <div className="card-title">🛑 Stop Signs</div>
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            {content.signs.map((s, i) => (
              <div key={i} style={{
                background:'var(--cream)',
                border:'1px solid var(--cream-dark)',
                borderRadius:10,
                padding:'12px 16px',
                display:'flex', gap:14, alignItems:'flex-start',
              }}>
                <div style={{
                  fontFamily:"'Lateef','Amiri',serif",
                  fontSize:'1.6rem', direction:'rtl',
                  color:'var(--green-dark)', fontWeight:700,
                  minWidth:40, textAlign:'center',
                  flexShrink:0,
                }}>{s.sign}</div>
                <div>
                  <div style={{fontWeight:800, fontSize:'0.88rem', color:'var(--green-dark)', marginBottom:3}}>
                    {s.name}
                  </div>
                  <div style={{fontWeight:700, fontSize:'0.82rem', color:'var(--text-dark)', marginBottom:3}}>
                    {s.meaning}
                  </div>
                  {s.desc && (
                    <div style={{fontSize:'0.78rem', color:'var(--text-light)', lineHeight:1.5}}>
                      {s.desc}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Examples by letter */}
      {content.examples_by_letter && (
        <div className="card">
          <div className="card-title">💬 Examples by Letter</div>
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            {content.examples_by_letter.map((grp,i) => (
              <div key={i} style={{
                background:'var(--cream)',
                borderRadius:10, padding:'12px 14px',
              }}>
                <div style={{
                  fontFamily:"'Lateef','Amiri',serif",
                  fontSize:'1rem', direction:'rtl',
                  color:'var(--green-dark)', fontWeight:800,
                  marginBottom:8,
                }}>{grp.letters}</div>
                <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                  {grp.examples.map((ex,ei) => (
                    <div key={ei} style={{
                      fontFamily:"'Lateef','Amiri',serif",
                      fontSize:'1.3rem', direction:'rtl',
                      background:'var(--green-ultra)',
                      color:'var(--green-dark)',
                      padding:'6px 14px',
                      borderRadius:8, fontWeight:600,
                    }}>{ex}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Thick/thin/etc examples */}
      {content.thick && (
        <div className="card">
          <div className="card-title">📊 Thick / Thin</div>
          <div style={{
            background:'var(--green-ultra)',
            borderRadius:10,
            padding:'12px 14px',
            marginBottom:10,
            fontSize:'0.85rem',
            color:'var(--text-dark)',
            lineHeight:1.6,
          }}>
            <strong>Thick:</strong> {content.thick}<br/>
            {content.thin && <><strong>Thin:</strong> {content.thin}</>}
          </div>
        </div>
      )}

      {/* Tanween rule extra */}
      {content.instruction && (
        <div className="card">
          <div className="card-title">📌 Instruction</div>
          <div style={{
            background:'var(--green-ultra)',
            borderLeft:'3px solid var(--green-main)',
            borderRadius:8, padding:'12px 14px',
            fontSize:'0.9rem', color:'var(--text-dark)', lineHeight:1.6, fontWeight:600,
          }}>{content.instruction}</div>
          {content.examples && (
            <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:10}}>
              {content.examples.map((ex,i) => (
                <div key={i} style={{
                  fontFamily:"'Lateef','Amiri',serif",
                  fontSize:'1.2rem', direction:'rtl',
                  background:'var(--cream)',
                  color:'var(--green-dark)',
                  padding:'6px 14px',
                  borderRadius:8, fontWeight:600,
                }}>{ex}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Intro note */}
      {content.intro && (
        <div className="card">
          <div className="card-title">📖 Introduction</div>
          <div className="theory-intro">{content.intro}</div>
        </div>
      )}

      {/* Summary rules list */}
      {content.summary?.rules && (
        <div className="card">
          <div className="card-title">✅ 4 Rules Summary</div>
          <div style={{display:'flex', flexDirection:'column', gap:8}}>
            {content.summary.rules.map((r,i) => (
              <div key={i} style={{
                display:'flex', gap:12, alignItems:'center',
                background:'var(--cream)', borderRadius:8, padding:'10px 14px',
              }}>
                <div style={{
                  background:'var(--green-main)', color:'white',
                  width:26, height:26, borderRadius:'50%',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.75rem', fontWeight:900, flexShrink:0,
                }}>{i+1}</div>
                <div style={{fontSize:'0.85rem', color:'var(--text-dark)', fontWeight:600}}>{r}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// ── Main TajweedLesson Page ──
export default function TajweedLesson({ lesson, navigate }) {
  if (!lesson) return null;

  const isMakharij = lesson.category === 'makharij';

  return (
    <div>
      <div className="app-header">
        <button className="header-back" onClick={() => navigate('home')}>←</button>
        <div>
          <div className="header-title">{lesson.title}</div>
          <div className="header-subtitle">
            <span className={`tajweed-cat-badge ${lesson.category}`} style={{fontSize:'0.65rem'}}>
              {lesson.category.replace(/_/g,' ')}
            </span>
            &nbsp; Lesson {lesson.id}
          </div>
        </div>
      </div>

      <div style={{paddingBottom: 60}}>
        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, var(--green-dark), var(--green-mid))',
          padding: '24px 20px 28px',
          textAlign: 'center',
        }}>
          <div style={{
            color:'rgba(255,255,255,0.65)',
            fontSize:'0.72rem', fontWeight:700,
            letterSpacing:'1px', textTransform:'uppercase',
            marginBottom:6,
          }}>Tajweed · {lesson.id}</div>
          <div style={{
            color:'white', fontSize:'1.2rem', fontWeight:800, marginBottom:10,
          }}>{lesson.title}</div>

          {/* Show letter chips in hero for makharij lessons */}
          {isMakharij && lesson.letters && (
            <div style={{display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap'}}>
              {lesson.letters.map((l,i) => (
                <div key={i} style={{
                  fontFamily:"'Lateef','Amiri',serif",
                  fontSize:'2rem',
                  color:'white',
                  background:'rgba(255,255,255,0.15)',
                  width:56, height:56,
                  borderRadius:12,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:700,
                }}>{l.letter}</div>
              ))}
            </div>
          )}

          <div style={{
            marginTop:12,
            display:'inline-flex', alignItems:'center', gap:6,
            background:'rgba(255,255,255,0.15)',
            padding:'4px 14px', borderRadius:20,
            color:'white', fontSize:'0.75rem', fontWeight:700,
          }}>
            📖 Tajweed Reference — Info Only
          </div>
        </div>

        {/* Content */}
        {isMakharij
          ? <MakhrajContent lesson={lesson} />
          : <InfoContent lesson={lesson} />
        }

        <div style={{height:20}} />
      </div>
    </div>
  );
}
